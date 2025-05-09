import React, { useState } from "react";
import { useGetP, useDelete } from "../../hooks/useApi";
import "./PlantHistorySidebar.css";

const PlantHistorySidebar = () => {
  const [historyItem, setHistoryItem] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const { data, isLoading, isError } = useGetP("/plants/all-plants", ["plants-history"]);
  const { mutate: deletePlant, isLoading: isDeleting } = useDelete(`/plants/delete/${historyItem}`, ["plants-history"]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this plant record?")) {
      setHistoryItem(id);
      deletePlant(id);
    }
  };

  const plants = data?.data || [];

  return (
    <>
      {/* Mobile Toggle Button */}
      

      <div className={`phs-sidebar`}>
        <button className="phs-toggle-button" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <i class="ri-close-line"></i> : <i class="ri-book-open-line"></i>}
        </button>
        <div style={{ display: isOpen ? "block" : "none" }} className="phs-content">
          <h2 className="phs-heading">History</h2>

          {isLoading ? (
            <p className="phs-loading">Loading history...</p>
          ) : isError ? (
            <p className="phs-error">Failed to load history</p>
          ) : plants.length === 0 ? (
            <p className="phs-empty">No records yet</p>
          ) : (
            <ul className="phs-list">
              {plants.map((plant) => (
                <li key={plant._id} className="phs-listitem">
                    <div className="phs-item">
                      <div className="phs-image-container">
                        <img
                          src={`data:image/jpeg;base64,${plant?.imageUrl}`}
                          alt="Plant"
                          className="phs-image"
                        />
                      </div>
                      <div>
                        <p className="phs-status">
                          {plant.isPlant ? "Plant Detected" : "Not a Plant"}
                        </p>
                        <p className="phs-date">
                          {new Date(plant.analyzedAt).toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <div className="phs-actions">
                      <p>Most likely {plant.diseases[0]?.name}</p>
                      <button
                        className="phs-delete-button"
                        onClick={() => handleDelete(plant._id)}
                        disabled={isDeleting}
                      >
                        {isDeleting ? "..." : <i className="ri-delete-bin-6-line"></i>}
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
      </div>
    </>
  );
};

export default PlantHistorySidebar;
