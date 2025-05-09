import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";


// const timelineData = customerData.activityTimeline.map(item => ({
//   date: item.date,
//   Orders: item.activity === "Order" ? 1 : 0,
//   Consultations: item.activity === "Consultation" ? 1 : 0,
// }));

export const ActivityAreaChart = ({data}) => (
  <AreaChart width={500} height={300} data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="date" />
    <YAxis />
    <Tooltip />
    <Area type="monotone" dataKey="paymentStatus" stroke="#82ca9d" fill="#82ca9d" />
    <Area type="monotone" dataKey="totalAmount" stroke="#df9971" fill="#ca9c82" />
  </AreaChart>
);
