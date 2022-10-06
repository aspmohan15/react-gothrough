import React, { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);


export const Chart = () => {

    const [datas, setdata] = useState(10)

    const data = {
        labels: ['Hellow', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', "New"],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3, datas],
                backgroundColor: [
                    'rgba(255, 99, 132)',
                    'rgba(54, 162, 235)',
                    'rgba(255, 206, 86)',
                    'rgba(75, 192, 192)',
                    'rgba(153, 102, 255)',
                    'rgba(255, 159, 64)',
                    'rgba(25, 159, 0 )',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 159, 64, 0)',
                ],
                borderWidth: 1,
            },
        ],
    };
    return (
        <div style={{ width: "300px", height: "300px", float: "right" }}>
            <Doughnut data={data} />
        </div>
    );
}
