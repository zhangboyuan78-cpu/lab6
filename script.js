const cities = {
  dongguan: {
    name: "Dongguan",
    latitude: 23.0207,
    longitude: 113.7518
  },
  shenzhen: {
    name: "Shenzhen",
    latitude: 22.5431,
    longitude: 114.0579
  },
  toronto: {
    name: "Toronto",
    latitude: 43.6532,
    longitude: -79.3832
  }
};

const citySelect = document.querySelector("#city");
const refreshButton = document.querySelector("#refresh");
const statusText = document.querySelector("#status");
const weatherSection = document.querySelector("#weather");

let activeController;
let requestId = 0;

function getWeatherStyle(code, isDay) {
  if ([95, 96, 99].includes(code)) {
    return {
      theme: "stormy",
      icon: "⛈️",
      description: "Thunderstorm",
      suggestion: "A stormy sky today. Enjoy a quiet moment indoors."
    };
  }