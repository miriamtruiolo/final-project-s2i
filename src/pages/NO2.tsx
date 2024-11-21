import React from "react";
import { Line } from "react-chartjs-2";
import { No2Time, newArrayNo2 } from "../data/fetchData";
import { ChartOptions } from "chart.js";

const NO2 = () => {
  return (
    <div>
      <NO2Section />
      <LineChart />
    </div>
  );
};

export default NO2;

const NO2Section = () => {
    return (
      <div className='flex flex-col my-12 mt-24'>
          <h2 className='text-gray-800 text-center text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 relative'>
            N02
          </h2>
          <hr className='opacity-5' />
          <p className='mx-12 my-8'>
            Nitrous oxide (NO2) is a greenhouse gas primarily produced by human activities like fossil fuel combustion, industrial processes, road transport, and intensive agriculture.

            NO2 directly impacts climate change by trapping heat in the atmosphere, contributing to global warming. It also reacts with other chemicals, forming aerosol particles and nitric acid, which harm air quality and human health.

            The consequences of increased NO2 emissions include glacier and polar ice melt, rising sea levels, and more extreme climate events. Additionally, NO2 contributes to soil and water acidification, affecting terrestrial and aquatic ecosystems.
          </p>
      </div>
    );
  };

const setupChartNo2 = {
  labels: No2Time,
  datasets: [
    {
      label: "NO2",
      backgroundColor: "rgb(30, 86, 196)",
      borderColor: "rgb(30, 86, 196)",
      data: newArrayNo2,
      borderWidth: 2, // //Change the thickness of the line
      fill: false, //  Prevents underlined fill
      pointBorderWidth: -5, // Change the radius of the point apexes
    },
  ],
};

const optionsChart = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      min: 310, // Valore minimo dell'asse Y
      max: 340, // Valore massimo dell'asse Y
      grid: {
        color: "rgba(255, 255, 255, 0.2)", // Asse Y
      },
    },
    x: {
      grid: {
        color: "rgba(255, 255, 255, 0.2)", // Asse X
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
        drag: {
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
      <div className="flex justify-center m-8 mb-32 md:mb-16">
        <Line
        className="h-60"
        data={setupChartNo2}
        options={optionsChart as ChartOptions<"line">}
      />
      </div>
    );
  };