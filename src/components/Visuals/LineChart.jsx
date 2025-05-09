import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
// import { salesData } from "./dummyData";

export const SalesLineChart = ({data}) => (
  <LineChart width={500} height={300} data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="month" />
    <YAxis />
    <Tooltip />
    <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
  </LineChart>
);
