import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { topProducts } from "./dummyData";

export const ProductsBarChart = ({data}) => (
  <BarChart width={500} height={300} data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis dataKey={"price"||"totalAmount"}/>
    <Tooltip />
    <Bar dataKey="price" fill="#82ca9d" />
  </BarChart>
);
