import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
import { orderStatus } from "./dummyData";

export const OrderStatusChart = () => (
  <BarChart width={300} height={150} data={orderStatus}>
    <XAxis dataKey="status" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="count" fill="#ffc658" />
  </BarChart>
);
