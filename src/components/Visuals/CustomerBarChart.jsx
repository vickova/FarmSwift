import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { topProducts } from "./dummyData";

export const CustomerBarChart = ({data}) => (
  <BarChart width={500} height={300} data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis dataKey={"totalAmount"}/>
    <Tooltip />
    <Bar dataKey="totalAmount" fill="#82ca9d" />
  </BarChart>
);
