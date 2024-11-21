import axios from "axios";
import Chart from "chart.js/auto";
import zoomPlugin from "chartjs-plugin-zoom";

Chart.register(zoomPlugin);


// Methane 
const apiMethane = "https://global-warming.org/api/methane-api";
export const methaneTime = []; // x axis
export const newArrayMethane = []; // y axis
await axios
  .get(apiMethane)
  .then((response) => {
    let dataApi = response.data.methane;

    dataApi.forEach((item, index) => {
      if (index % 2 === 0) {
        methaneTime.push(item.date);
        newArrayMethane.push(item.average);
      }
    });
  })

  .catch((error) => {
    console.error("Error in the request", error);
  });


// Temperature 
const apiTemperature = "https://global-warming.org/api/temperature-api";
export const newArrayTime = []; // x axis
export const newArrayTemperature = []; // y axis

await axios
  .get(apiTemperature)
  .then((response) => {
    let dataApi = response.data.result;

    dataApi.forEach((item, index) => {
      if (index % 2 === 0) {
        newArrayTime.push(item.time);
        newArrayTemperature.push(item.station);
      }
    });
  })

  .catch((error) => {
    console.error("Error in request:", error);
  });

// CO2
const apiCO2 = "https://global-warming.org/api/co2-api";
export const co2Time = []; // x axis
export const newArrayCO2 = []; // y axis
await axios
  .get(apiCO2)
  .then((response) => {
    console.log(response);
    let dataApi = response.data.co2;

    dataApi.forEach((item, index) => {
      if (index % 2 === 0) {
        co2Time.push(item.year);
        newArrayCO2.push(item.trend);
      }
    });
  })

  .catch((error) => {
    console.error("Error in the request", error);
  });

// Glaciers
const apiGlaciers = "https://global-warming.org/api/arctic-api";
export const glaciersTime = []; // x axis
export const newArrayGlaciersArea = []; // y axis
export const newArrayGlaciersExtent = []; // y axis

await axios
  .get(apiGlaciers)
  .then((response) => {
    console.log(response);
    let dataApi = response.data.arcticData;

    dataApi.forEach((item, index) => {
      if (index % 2 === 0) {
        glaciersTime.push(item.year);
        newArrayGlaciersArea.push(item.area);
        newArrayGlaciersExtent.push(item.extent);
      }
    });
  })

  .catch((error) => {
    console.error("Error in the request:", error);
  });

// NO2
const apiNO2 = "https://global-warming.org/api/nitrous-oxide-api";
export const No2Time = []; // x axis
export const newArrayNo2 = []; // y axis

await axios
  .get(apiNO2)
  .then((response) => {
    let dataApi = response.data.nitrous;

    dataApi.forEach((item, index) => {
      if (index % 2 === 0) {
        No2Time.push(item.date);
        newArrayNo2.push(item.average);
      }
    });
  })

  .catch((error) => {
    console.error("Error in the request:", error);
  });