import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const PaymentStatus = () => {
  const location = useLocation();
  const [status, setStatus] = useState("loading");
  const [details, setDetails] = useState(null);

  const queryParams = new URLSearchParams(location.search);
  const transactionId = queryParams.get("transaction_id");

  useEffect(() => {
    if (transactionId) {
      axios
        .post(`https://farmswift-api.onrender.com/api/v1/order/pay/verify/${transactionId}`)
        .then((res) => {
          if (res.data.success) {
            setStatus("success");
            setDetails(res.data.data);
          } else {
            setStatus("failed");
          }
        })
        .catch(() => {
          setStatus("error");
        });
    } else {
      setStatus("invalid");
    }
  }, [transactionId]);

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      {status === "loading" && <p>Verifying payment...</p>}
      {status === "success" && (
        <div>
          <h2>✅ Payment Successful</h2>
          <p>Amount: ₦{details.amount}</p>
          <p>Ref: {details.tx_ref}</p>
        </div>
      )}
      {status === "failed" && <h2>❌ Payment Failed</h2>}
      {status === "error" && <h2>⚠️ An error occurred while verifying payment</h2>}
      {status === "invalid" && <h2>❗ Missing Transaction ID</h2>}
    </div>
  );
};

export default PaymentStatus;
