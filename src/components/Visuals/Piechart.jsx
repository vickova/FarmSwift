import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { usersData } from "./dummyData";

const COLORS = ["#0088FE", "#00C49F"];

export const UserPieChart = () => {
    console.log(usersData)
  return <PieChart width={300} height={200}>
    <Pie
      data={usersData}
      dataKey="count"
      nameKey="role"
      cx="50%"
      cy="50%"
      outerRadius={80}
      label
    >
      {usersData.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
    <Tooltip />
  </PieChart>
};
