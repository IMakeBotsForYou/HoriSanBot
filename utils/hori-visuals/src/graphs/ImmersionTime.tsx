// src/graphs/ImmersionTime.tsx

import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

// Define the structure of your data points
interface DataPoint {
  date: string;
  watchTime: number;
  listeningTime: number;
  readingTime: number;
}

// Main component to render the bar chart
const ImmersionTime: React.FC = () => {
  // Replace this with your actual data source
  const data: DataPoint[] = (window as any).puppeteerData.data;

  // Define the series for the bar chart without sanitization
  const series = [
    {
      name: 'Watchtime',
      data: data.map((point) => point.watchTime),
    },
    {
      name: 'Listening',
      data: data.map((point) => point.listeningTime),
    },
    {
      name: 'Reading',
      data: data.map((point) => point.readingTime),
    },
  ];

  // Function to generate chart options
  const chartOptions: ApexOptions = {
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: false,
      },
      animations: {
        enabled: false,
      },
      zoom: {
        enabled: false,
      },
      stacked: true,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '75%', // Full width to prevent gaps
        borderRadius: 0, // No border radius for seamless stacking
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: false, // Remove borders between bars
    },
    grid: {
      show: true,
      borderColor: '#333', // Dark grid lines for visibility
      strokeDashArray: 0,
      position: 'back',
      xaxis: {
        lines: {
          show: false, // Hide vertical grid lines
        },
      },
      yaxis: {
        lines: {
          show: true, // Show horizontal grid lines
        },
      },
    },
    xaxis: {
      categories: data.map((point) =>
        // Display the date label only every 5 days for readability
        // Adjust as needed based on your data density
        // Alternatively, display all labels by removing the condition
        data.indexOf(point) % 5 === 0 ? point.date : ''
      ),
      labels: {
        rotate: 0,
        rotateAlways: false,
        style: {
          fontSize: '25px',
          colors: '#ffffff',
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: true,
      },
    },
    yaxis: {
      title: {
        text: 'Minutes',
        style: {
          fontSize: '30px',
        },
        offsetX: -15,
      },
      labels: {
        style: {
          fontSize: '30px',
          colors: ['#fff'],
        },
        formatter: (value: number) => `${value}`,
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: (val: number) => `${val}`,
      },
    },
    colors: ['#00E396', '#0090FF', '#FF4560'],
    legend: {
      fontSize: '40px',
      fontWeight: 700, // Using numeric value for font weight
      offsetY: -15,
    },
  };

  return (
    <div className="bg-black w-[1250px] h-[900px] p-4">
      <Chart
        options={chartOptions}
        series={series}
        type="bar"
        height={800}
      />
    </div>
  );
};

export default ImmersionTime;