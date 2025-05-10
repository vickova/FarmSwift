import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { BASE_URL } from "../utils/config"; // Adjust based on your setup

const VerifyAccount = () => {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get("token");
  const navigate = useNavigate();
  const [status, setStatus] = useState("loading"); // 'loading', 'success', 'error'
  const [message, setMessage] = useState("");
console.log(token)
  useEffect(() => {
    if (!token) {
      setStatus("error");
      setMessage("Invalid verification link.");
      return;
    }

    const verifyUser = async () => {
      try {
        const response = await fetch(`${BASE_URL}/auth/verify/${token}`, {
          method: "GET",
        });

        const data = await response.json();

        if (response.ok) {
          setStatus("success");
          setMessage(data.message || "Your account has been verified successfully!");
          // setTimeout(() => navigate("/login"), 3000); // Redirect after 3 seconds
        } else {
          setStatus("error");
          setMessage(data.message || "Verification failed. The link may be expired or invalid.");
        }
      } catch (error) {
        setStatus("error");
        setMessage("An error occurred while verifying your account.");
      }
    };

    verifyUser();
  }, [token, navigate]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {status === "loading" && <p>Verifying your account...</p>}
      {status === "success" && <p style={{ color: "green" }}> <span>{message}</span><span> Proceed to <a href="/login">Login</a></span></p>}
      {status === "error" && <p style={{ color: "red" }}>{message}</p>}
    </div>
  );
};

export default VerifyAccount;
