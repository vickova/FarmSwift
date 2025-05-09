import React, { useEffect, useState } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { usePostBody } from "../../hooks/useApi";
import "./ChatInterface.css";

const getCoordinates = async (location) => {
  try {
    const response = await axios.get("https://api.opencagedata.com/geocode/v1/json", {
      params: {
        q: location,
        key: "9356964e63c647779c0577f11bf683ad",
      },
    });
    const { results } = response.data;
    if (results.length > 0) {
      return results[0].geometry;
    }
    return null;
  } catch (error) {
    console.error("Geocoding error:", error);
    return null;
  }
};

const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () =>
      resolve(reader.result.replace(/^data:image\/[a-z]+;base64,/, ""));
    reader.onerror = (error) => reject(error);
  });

const useIdentifyPlant = () => {
  return useMutation({
    mutationFn: async (body) => {
      const response = await axios.post(
        "https://plant.id/api/v3/health_assessment",
        body,
        {
          headers: {
            "Content-Type": "application/json",
            "Api-Key": "egRI49XjMnBiIDMRRuhGwja3OxRLP1tRnmQ5bEBkjXhTZX5V03",
          },
        }
      );
      console.log("API response:", response.data);
      return response.data;
    },
  });
};

const PlantUploader = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [base64Image, setBase64Image] = useState(null);
  const [analysisResult, setAnalysisResult] = useState(null); // ✅ separate local state for result

  const {
    mutate: identifyPlant,
    isPending,
    isError,
    error,
  } = useIdentifyPlant();

  const {
    mutate: saveResult,
    isPending: isSaving
  } = usePostBody("/plants/save", "plant-save");

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all")
      .then(res => {
        const sortedCountries = res.data
          .map(c => c.name.common)
          .sort((a, b) => a.localeCompare(b));
        setCountries(sortedCountries);
      })
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    if (country === "Nigeria") {
      setStates([
        "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue",
        "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe",
        "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos",
        "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers",
        "Sokoto", "Taraba", "Yobe", "Zamfara", "FCT"
      ]);
    } else {
      setStates([]);
      setState("");
    }
  }, [country]);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
    const base64 = await toBase64(file);
    setBase64Image(base64);
  };

  const handleAnalyze = async () => {
    if (!image || !country) return;

    const location = state ? `${state}, ${country}` : country;
    const coordinates = await getCoordinates(location);

    if (!coordinates) {
      alert("Could not determine location coordinates.");
      return;
    }

    identifyPlant(
      { images: [base64Image], latitude: coordinates.lat, longitude: coordinates.lng },
      {
        onSuccess: (data) => {
          setAnalysisResult(data); // ✅ Store result locally
        }
      }
    );
  };

  const handleSave = () => {
    if (!analysisResult) return;

    const payload = {
      imageUrl: base64Image,
      isPlant: analysisResult.result.is_plant.binary,
      isHealthy: analysisResult.result.is_healthy.binary,
      diseases: analysisResult.result.disease?.suggestions?.map(sug => ({
        name: sug.name,
        probability: sug.probability
      })),
      latitude: analysisResult.input.latitude,
      longitude: analysisResult.input.longitude,
      analyzedAt: analysisResult.input.datetime,
    };

    saveResult(payload, {
      onSuccess: () => {
        // ✅ Clear state after saving
        setImage(null);
        setPreview(null);
        setBase64Image(null);
        setCountry("");
        setState("");
        setAnalysisResult(null); // Clear result
      }
    });
  };

  return (
    <div className="plant-upload-container">
      <h2>🌱 Identify Your Plant</h2>

      <label className="upload-box">
        <input type="file" accept="image/*" hidden onChange={handleImageChange} />
        {preview ? (
          <img src={preview} alt="Preview" className="preview-img" />
        ) : (
          "Click to upload a plant image"
        )}
      </label>

      <select
        className="consult-select"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      >
        <option value="">Select Country</option>
        {countries.map((c, idx) => (
          <option key={idx} value={c}>{c}</option>
        ))}
      </select>

      {states.length > 0 && (
        <select
          className="consult-select"
          value={state}
          onChange={(e) => setState(e.target.value)}
        >
          <option value="">Select State</option>
          {states.map((s, idx) => (
            <option key={idx} value={s}>{s}</option>
          ))}
        </select>
      )}

      <button
        onClick={handleAnalyze}
        className="consult_button"
        disabled={!image || !country || isPending}
        style={{ backgroundColor: !image || !country || isPending ? "gray" : "#199b74" }}
      >
        {isPending ? "Analyzing..." : "Analyze Plant"}
      </button>

      {isError && <p style={{ color: "red" }}>Error: {error.message}</p>}

      {analysisResult?.suggestions?.length > 0 && (
        <div className="result">
          <h3>🌿 Top Match:</h3>
          <p><strong>{analysisResult.suggestions[0].plant_name}</strong></p>
          <p>Probability: {(analysisResult.suggestions[0].probability * 100).toFixed(2)}%</p>
        </div>
      )}

      {analysisResult && (
        <div className="result">
          <h3>🌿 Plant Health Analysis</h3>
          <p><strong>Date:</strong> {new Date(analysisResult.input.datetime).toLocaleString()}</p>
          <p><strong>Location:</strong> Latitude {analysisResult.input.latitude}, Longitude {analysisResult.input.longitude}</p>
          <p><strong>Is Plant:</strong> {analysisResult.result.is_plant.binary ? "Yes" : "No"} ({(analysisResult.result.is_plant.probability * 100).toFixed(2)}%)</p>
          <p><strong>Healthy:</strong> {analysisResult.result.is_healthy.binary ? "Yes" : "No"} ({(analysisResult.result.is_healthy.probability * 100).toFixed(2)}%)</p>

          <h4>🦠 Possible Diseases:</h4>
          <ul>
            {analysisResult.result.disease?.suggestions?.map((sug, idx) => (
              <li key={idx}>
                <strong>{sug.name}</strong> - {(sug.probability * 100).toFixed(2)}%
              </li>
            ))}
          </ul>

          <button
            onClick={handleSave}
            className="consult_button"
            disabled={isSaving}
            style={{ marginTop: "1rem", backgroundColor: "#199b74" }}
          >
            {isSaving ? "Saving..." : "Save Analysis"}
          </button>
        </div>
      )}
    </div>
  );
};

export default PlantUploader;
