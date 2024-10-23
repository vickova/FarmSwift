import React from "react";
import Chart from "chart.js/auto";
import {Line, Bar, Doughnut} from 'react-chartjs-2'


const labels = ["January", "February", "March", "April", "May", "June"];
const data = {
    labels: labels,
    datasets: [
        {
            label: "My First dataset",
            backgroundColor: "rgba(253, 135, 135, 0.8)",
            borderColor: "rgb(255, 99, 132)",
            data: [0, 10, 5, 2, 20, 30, 45],
        },
        {
            label: "My First dataset",
            backgroundColor: "#199b74",
            borderColor: "#199b74",
            data: [5, 15, 8, 2, 10, 20, 35],
        },
    ],
};
export const DashboardChart = () => {
    return (
        <Bar data={data} />
    );
};

export const DoughnutCircle = () =>{
    return (
            <Doughnut data={data}/>
    )
}
export const LineChart = () =>{
    return (
            <Line data={data}/>
    )
}