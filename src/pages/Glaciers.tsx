import React from "react";
import { Line } from "react-chartjs-2";
import { newArrayGlaciersArea, newArrayGlaciersExtent, glaciersTime } from "../data/fetchData";
import { ChartOptions } from "chart.js";

const Glaciers = () => {
  return (
    <div>
      <GlaciersSection />
      <LineChart />
    </div>
  );
};

export default Glaciers;

const GlaciersSection = () => {
    return (
      <div className='flex flex-col my-12 mt-24'>
          <h2 className='text-gray-800 text-center text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 relative'>
            Polar Ice
          </h2>
          <hr className='opacity-5' />
          <p className='mx-12 my-8'>
          The rapid glacier melt is primarily driven by rising global temperatures, fueled by greenhouse gas emissions like methane from both human activities and natural processes. The greenhouse effect traps heat in the atmosphere, leading to ice melt. Consequences include sea level rise, ecosystem shifts, and extreme climate events. Urgent action to reduce emissions and adopt sustainable solutions is essential to address this challenge.
          </p>
      </div>
    );
  };

const setupChartGlaciers = {
  labels: glaciersTime,
  datasets: [
    {
      label: "Area",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: newArrayGlaciersArea,
      borderWidth: 2,
      fill: false,
      pointBorderWidth: -5,
      pointRadius: 1.5,
      lineTension: 0.4, // Curvature of the lines
    },
    {
      label: "Extension",
      backgroundColor: "rgb(54, 162, 235)",
      borderColor: "rgb(54, 162, 235)",
      data: newArrayGlaciersExtent,
      borderWidth: 2,
      fill: false,
      pointBorderWidth: -5,
      pointRadius: 1.5,
      lineTension: 0.4, // Curvature of the lines
    },
  ],
};

const optionsChart = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: "rgba(255, 255, 255, 0.2)",
      },
    },
    x: {
      grid: {
        color: "rgba(255, 255, 255, 0.2)",
      },
    },
  },
  plugins: {
    zoom: {
      wheel: {
        enabled: true,
      },
      drag: {
        enabled: true,
        mode: "xy",
      },
      pinch: {
        enabled: true,
        mode: "xy",
      },
    },
  },
};

const LineChart = () => {
    return (
      <div className="flex justify-center m-8 mb-40 md:mb-24">
       <Line
        className="h-60"
        data={setupChartGlaciers}
        options={optionsChart as ChartOptions<"line">}
      />
      </div>
    );
  };