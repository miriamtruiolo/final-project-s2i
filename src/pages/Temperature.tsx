import React from "react";
import { Line } from "react-chartjs-2";
import { newArrayTemperature, newArrayTime } from "../data/fetchData";
import { ChartOptions } from "chart.js";

const Temperature = () => {
  return (
    <div>
      <TemperatureSection />
      <LineChart />
    </div>
  );
};

export default Temperature;

const TemperatureSection = () => {
  return (
    <div className="flex flex-col my-12 mt-24">
      <h2 className="text-gray-800 h-20 text-center text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 relative">
        Temperature
      </h2>
      <hr className="opacity-5" />
      <p className="mx-12 my-8">
      The rise in global temperatures is mainly caused by the excessive release of greenhouse gases, such as carbon dioxide and methane, which come from human activities like industry and transportation. These gases trap heat in the atmosphere, leading to the greenhouse effect and causing major changes in the climate. The impacts are widespread: melting glaciers are causing sea levels to rise, threatening coastlines and coastal communities. More frequent and intense extreme weather events, like storms and heatwaves, are damaging infrastructure and crops. Important ecosystems, such as coral reefs, are in danger, which affects biodiversity.
      </p>
    </div>
  );
};

const setupChartTemperature = {
  labels: newArrayTime,
  datasets: [
    {
      label: "Temperature",
      backgroundColor: "rgb(30, 86, 196)",
      borderColor: "rgb(30, 86, 196)",
      data: newArrayTemperature,
      borderWidth: 1, //Change the thickness of the line
      fill: false, // Prevents underlined fill
      pointBorderWidth: -5, // Change the radius of the point apexes
      pointRadius: 1.5,
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
      pan: {
        enabled: true,
        mode: "xy",
      },
      zoom: {
        wheel: {
          enabled: true,
        },
        pinch: {
          enabled: true,
        },
        mode: "xy",
      },
    },
  },
};

const LineChart = () => {
  return (
    <div className="flex justify-center m-8 mb-40">
      <Line
        className="h-60"
        data={setupChartTemperature}
        options={optionsChart as ChartOptions<"line">}
      />
    </div>
  );
};
