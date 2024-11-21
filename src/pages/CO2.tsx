import React from "react";
import { Line } from "react-chartjs-2";
import { co2Time, newArrayCO2 } from "../data/fetchData";
import { ChartOptions } from "chart.js";

const CO2 = () => {
  return (
    <div>
      <CO2Section />
      <LineChart />
    </div>
  );
};

export default CO2;

const CO2Section = () => {
    return (
      <div className='flex flex-col my-12 mt-24'>
          <h2 className='text-gray-800 text-center text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 relative'>
            CO2
          </h2>
          <hr className='opacity-5' />
          <p className='mx-12 my-8'>
            CO2, or carbon dioxide, is a naturally occurring atmospheric gas crucial for regulating the planet's temperature. However, human activities like burning fossil fuels and deforestation have drastically raised its levels, directly impacting climate change.

            The accumulation of CO2 acts as a thermal blanket, trapping heat and causing the greenhouse effect. This results in rising global temperatures, leading to extreme events like heatwaves, severe storms, and prolonged droughts. Additionally, it accelerates glacier melt and sea level rise, posing a threat to coastal communities.
          </p>
      </div>
    );
  };

const setupChartCo2 = {
  labels: co2Time, // y-axis dates
  datasets: [
    {
      label: "CO2",
      backgroundColor: "rgb(30, 86, 196)",
      borderColor: "rgb(30, 86, 196)",
      data: newArrayCO2, // y-axis dates
      borderWidth: 1, // Change the thickness of the line
      fill: false, // Prevents underlined fill
      pointBorderWidth: -5, //Change the thickness of the superscript points
      pointRadius: 1.5,
    },
  ],
};

const optionsChart = {
  responsive: true,
  maintainAspectRatio: false,
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
  scales: {
    y: {
      min: 370, // Valore minimo dell'asse Y
      max: 440, // Valore massimo dell'asse Y
      grid: {
        color: "rgba(255, 255, 255, 0.3)", // Asse Y
      },
    },
    x: {
      grid: {
        color: "rgba(255, 255, 255, 0.3)", // Asse X
      },
    },
  },
};


const LineChart = () => {
    return (
      <div className="flex justify-center m-8 mb-32 md:mb-16">
        <Line
        className="h-60"
        data={setupChartCo2}
        options={optionsChart as ChartOptions<"line">}
      />
      </div>
    );
  };