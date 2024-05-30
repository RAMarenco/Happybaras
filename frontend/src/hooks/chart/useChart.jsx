import { useState } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
        },
        tooltip: {
            enabled: true,
            mode: "index",
            intersect: false,
        },
    },
    hover: {
        mode: "nearest",
        intersect: true,
    },
};

const useChart = () => {
    const [data, setData] = useState([]);
    const [labels, setLabels] = useState([]);

    const info = {
        labels,
        datasets: [
            {
                data: data,
                borderColor: "#6BAA75",
                backgroundColor: "#6BAA75",
                tension: 0.5,
            },
        ],
    };

    const chart = () => {
        if (data.length > 0 && labels.length > 0)
            return <Line options={options} data={info} />;
    };

    return { chart, setData, setLabels };
};

export default useChart;
