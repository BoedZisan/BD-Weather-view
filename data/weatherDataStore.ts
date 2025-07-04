import { v4 as uuidv4 } from "uuid";

// Types for weather data
export interface WeatherData {
  id: string;
  dataType: string;
  stationNo: string;
  year: string;
  month: string;
  day: string;
  measurements: string[];
  meteorCodes: string[];
  characterCodes: Record<string, string>;
  windDirection: string;
  windTime: string;
  submittedAt: string;
}

export interface StationInfo {
  name: string;
  id: string;
}

// Selected stations for the application
export const selectedStations: StationInfo[] = [
  { name: "Dhaka", id: "41923" },
  { name: "Joydebpur", id: "41700" },
  { name: "Mymensingh", id: "41886" },
  { name: "Tangail", id: "41909" },
  { name: "Faridpur", id: "41929" },
  { name: "Madaripur", id: "41939" },
  { name: "Chittagong", id: "41978" },
  { name: "Sandwip", id: "41964" },
  { name: "Sitakunda", id: "41965" },
  { name: "Rangamati", id: "41966" },
  { name: "Comilla", id: "41933" },
  { name: "Chandpur", id: "41941" },
  { name: "M.Court", id: "41953" },
  { name: "Feni", id: "41943" },
  { name: "Hatiya", id: "41963" },
  { name: "Coxs_Bazar", id: "41992" },
  { name: "Kutubdia", id: "41989" },
  { name: "Teknaf", id: "41998" },
  { name: "Sylhet", id: "41891" },
  { name: "Srimangal", id: "41915" },
  { name: "Rajshahi", id: "41895" },
  { name: "Ishurdi", id: "41907" },
  { name: "Bogra", id: "41883" },
  { name: "Rangpur", id: "41859" },
  { name: "Dinajpur", id: "41863" },
  { name: "Sayedpur", id: "41858" },
  { name: "Khulna", id: "41947" },
  { name: "Mongla", id: "41958" },
  { name: "Satkhira", id: "41946" },
  { name: "Jessore", id: "41936" },
  { name: "Chuadanga", id: "41926" },
  { name: "Barisal", id: "41950" },
  { name: "Patuakhali", id: "41960" },
  { name: "Khepupara", id: "41984" },
  { name: "Bhola", id: "41951" },
  { name: "Tetulia", id: "41850" },
  { name: "Saint Martin", id: "41955" },
  { name: "Bandarban", id: "41980" },
  { name: "Dighinala", id: "41944" },
  { name: "Nikli", id: "41902" },
  { name: "Dimla", id: "41851" },
  { name: "Badalgachhi", id: "41881" },
  { name: "Rajarhat", id: "41856" },
  { name: "Kumarkhali", id: "41927" },
  { name: "Gopalganj", id: "41938" },
  { name: "Tarash", id: "41897" },
  { name: "Netrokona", id: "41888" },
  { name: "Aricha_Manikganj", id: "41930" },
  { name: "Mawa_Munshiganj", id: "41940" },
  { name: "Narsingdi", id: "41924" },
  { name: "Ashuganj_Brahmanbaria", id: "41916" },
  { name: "Monpura_Bhola", id: "41981" },
  { name: "Kawkhali_Pirojpur", id: "41979" },
  { name: "Koyra_Khulna", id: "41948" },
  { name: "Ramgati_Lakshmipur", id: "41961" },
  { name: "Narayanganj", id: "41925" },
  { name: "Hijla_Barishal", id: "41962" },
  { name: "Baghabari_Sirajganj", id: "41906" },
  { name: "Joydebpur", id: "99999" },
  { name: "Ambagan", id: "41977" },
];

// Measurement labels
export const measurementLabels = [
  "Av. Station Pressure",
  "Av. Sea-Level Pressure",
  "Av. Dry-Bulb Temperature",
  "Av. Wet Bulb Temperature",
  "Max. Temperature",
  "Min Temperature",
  "Total Precipitation",
  "Av. Dew. Point Temperature",
];

// Measurement labels
export const measurementLabels2 = [
  "Av. Rel Humidity",
  "Av. Wind Speed",
  "Prevailing Wind Direction (16Pts)",
  "Max Wind Speed",
  "Direction of Max Wind (16Pts)",
  "Av. Total Cloud",
  "Lowest visibility",
  "Total Duration of Rain (H-M)",
];

// Meteor code labels
export const meteorLabels = [
  "Lightning",
  "Thunder-Storm",
  "Squall",
  "Dust Storm",
  "Fog",
  "Mist",
  "Haze",
  "Hail",
];

// Wind direction data
export const windDirections = [
  { direction: "N", degrees: "350°-010°", code: "35,36,01" },
  { direction: "NNE", degrees: "011°-034°", code: "02,03" },
  { direction: "NE", degrees: "035°-056°", code: "04,05" },
  { direction: "ENE", degrees: "057°-079°", code: "06,07" },
  { direction: "E", degrees: "080°-101°", code: "08,09,10" },
  { direction: "ESE", degrees: "102°-124°", code: "11,12" },
  { direction: "SE", degrees: "125°-146°", code: "13,14" },
  { direction: "SSE", degrees: "147°-169°", code: "15,16" },
  { direction: "S", degrees: "170°-190°", code: "17,18,19" },
  { direction: "SSW", degrees: "191°-214°", code: "20,21" },
  { direction: "SW", degrees: "215°-236°", code: "22,23" },
  { direction: "WSW", degrees: "237°-259°", code: "24,25" },
  { direction: "W", degrees: "260°-281°", code: "26,27,28" },
  { direction: "WNW", degrees: "282°-304°", code: "29,30" },
  { direction: "NW", degrees: "305°-326°", code: "31,32" },
  { direction: "NNW", degrees: "327°-349°", code: "33,34" },
  { direction: "VAR", degrees: "", code: "99" },
  { direction: "CALM", degrees: "-", code: "00" },
];

// Character code data
export const characterGroups = [
  {
    title: "Drizzle",
    range: "72-73",
    groupId: "drizzle",
    items: [
      { id: "lightDrizzle", label: "Light Drizzle", code: "01" },
      { id: "modDrizzle", label: "Mod Drizzle", code: "02" },
      { id: "heavyDrizzle", label: "Heavy Drizzle", code: "03" },
    ],
  },
  {
    title: "Cont. Rain",
    range: "74-75",
    groupId: "contRain",
    items: [
      { id: "lightContRain", label: "Light Cont.Rain", code: "04" },
      { id: "modContRain", label: "Mod Con. Rain", code: "05" },
      { id: "heavyContRain", label: "Heavy Cont. Rain", code: "06" },
    ],
  },
  {
    title: "Inter. Rain",
    range: "76-77",
    groupId: "interRain",
    items: [
      { id: "lightInterRain", label: "Light Inter. Rain", code: "07" },
      { id: "modInterRain", label: "Mod. Inter. Rain", code: "08" },
      { id: "heavyInterRain", label: "Heavy Inter. Rain", code: "09" },
    ],
  },
  {
    title: "Shower",
    range: "78-80",
    groupId: "shower",
    items: [
      { id: "lightShower", label: "Light Shower", code: "10" },
      { id: "modShower", label: "Mod Shower", code: "11" },
      { id: "heavyShower", label: "Heavy Shower", code: "12" },
    ],
  },
];

// Generate mock weather data for the specified stations and dates
export const weatherData: WeatherData[] = [
  // May 3rd data
  {
    id: uuidv4(),
    dataType: "10",
    stationNo: "41923", // Dhaka
    year: "25",
    month: "05",
    day: "03",
    measurements: [
      "15",
      "20",
      "25",
      "26",
      "31",
      "32",
      "38",
      "41",
      "44",
      "47",
      "51",
      "52",
      "52",
      "54",
      "55",
      "61",
    ],
    meteorCodes: ["64", "65", "66", "67", "68", "69", "70", "71"],
    characterCodes: {
      drizzle: "lightDrizzle",
      contRain: "lightContRain",
      interRain: "lightInterRain",
      shower: "lightShower",
    },
    windDirection: "SE",
    windTime: "600",
    submittedAt: "2025-05-03T09:16:26.929Z",
  },
  {
    id: uuidv4(),
    dataType: "10",
    stationNo: "41700", // Joydebpur
    year: "25",
    month: "05",
    day: "03",
    measurements: [
      "16",
      "21",
      "26",
      "27",
      "32",
      "33",
      "39",
      "42",
      "45",
      "48",
      "52",
      "53",
      "53",
      "55",
      "56",
      "62",
    ],
    meteorCodes: ["64", "65", "66", "67", "68", "69", "70", "71"],
    characterCodes: {
      drizzle: "modDrizzle",
      contRain: "modContRain",
      interRain: "modInterRain",
      shower: "modShower",
    },
    windDirection: "SSE",
    windTime: "630",
    submittedAt: "2025-05-03T09:30:26.929Z",
  },
  {
    id: uuidv4(),
    dataType: "10",
    stationNo: "41886", // Mymensingh
    year: "25",
    month: "05",
    day: "03",
    measurements: [
      "14",
      "19",
      "24",
      "25",
      "30",
      "31",
      "37",
      "40",
      "43",
      "46",
      "50",
      "51",
      "51",
      "53",
      "54",
      "60",
    ],
    meteorCodes: ["64", "65", "66", "67", "68", "69", "70", "71"],
    characterCodes: {
      drizzle: "heavyDrizzle",
      contRain: "heavyContRain",
      interRain: "heavyInterRain",
      shower: "heavyShower",
    },
    windDirection: "S",
    windTime: "615",
    submittedAt: "2025-05-03T09:45:26.929Z",
  },
  {
    id: uuidv4(),
    dataType: "10",
    stationNo: "41909", // Tangail
    year: "25",
    month: "05",
    day: "03",
    measurements: [
      "17",
      "22",
      "27",
      "28",
      "33",
      "34",
      "40",
      "43",
      "46",
      "49",
      "53",
      "54",
      "54",
      "56",
      "57",
      "63",
    ],
    meteorCodes: ["64", "65", "66", "67", "68", "69", "70", "71"],
    characterCodes: {
      drizzle: "lightDrizzle",
      contRain: "modContRain",
      interRain: "heavyInterRain",
      shower: "lightShower",
    },
    windDirection: "SW",
    windTime: "645",
    submittedAt: "2025-05-03T10:00:26.929Z",
  },
  {
    id: uuidv4(),
    dataType: "10",
    stationNo: "41929", // Faridpur
    year: "25",
    month: "05",
    day: "03",
    measurements: [
      "18",
      "23",
      "28",
      "29",
      "34",
      "35",
      "41",
      "44",
      "47",
      "50",
      "54",
      "55",
      "55",
      "57",
      "58",
      "64",
    ],
    meteorCodes: ["64", "65", "66", "67", "68", "69", "70", "71"],
    characterCodes: {
      drizzle: "modDrizzle",
      contRain: "heavyContRain",
      interRain: "lightInterRain",
      shower: "modShower",
    },
    windDirection: "WSW",
    windTime: "700",
    submittedAt: "2025-05-03T10:15:26.929Z",
  },

  // May 4th data
  {
    id: uuidv4(),
    dataType: "10",
    stationNo: "41923", // Dhaka
    year: "25",
    month: "05",
    day: "04",
    measurements: [
      "16",
      "21",
      "26",
      "27",
      "32",
      "33",
      "39",
      "42",
      "45",
      "48",
      "52",
      "53",
      "53",
      "55",
      "56",
      "62",
    ],
    meteorCodes: ["64", "65", "66", "67", "68", "69", "70", "71"],
    characterCodes: {
      drizzle: "modDrizzle",
      contRain: "modContRain",
      interRain: "modInterRain",
      shower: "modShower",
    },
    windDirection: "SSW",
    windTime: "615",
    submittedAt: "2025-05-04T09:16:26.929Z",
  },
  {
    id: uuidv4(),
    dataType: "10",
    stationNo: "41700", // Joydebpur
    year: "25",
    month: "05",
    day: "04",
    measurements: [
      "17",
      "22",
      "27",
      "28",
      "33",
      "34",
      "40",
      "43",
      "46",
      "49",
      "53",
      "54",
      "54",
      "56",
      "57",
      "63",
    ],
    meteorCodes: ["64", "65", "66", "67", "68", "69", "70", "71"],
    characterCodes: {
      drizzle: "heavyDrizzle",
      contRain: "heavyContRain",
      interRain: "heavyInterRain",
      shower: "heavyShower",
    },
    windDirection: "S",
    windTime: "645",
    submittedAt: "2025-05-04T09:30:26.929Z",
  },
  {
    id: uuidv4(),
    dataType: "10",
    stationNo: "41886", // Mymensingh
    year: "25",
    month: "05",
    day: "04",
    measurements: [
      "15",
      "20",
      "25",
      "26",
      "31",
      "32",
      "38",
      "41",
      "44",
      "47",
      "51",
      "52",
      "52",
      "54",
      "55",
      "61",
    ],
    meteorCodes: ["64", "65", "66", "67", "68", "69", "70", "71"],
    characterCodes: {
      drizzle: "lightDrizzle",
      contRain: "lightContRain",
      interRain: "lightInterRain",
      shower: "lightShower",
    },
    windDirection: "SE",
    windTime: "630",
    submittedAt: "2025-05-04T09:45:26.929Z",
  },
  {
    id: uuidv4(),
    dataType: "10",
    stationNo: "41909", // Tangail
    year: "25",
    month: "05",
    day: "04",
    measurements: [
      "18",
      "23",
      "28",
      "29",
      "34",
      "35",
      "41",
      "44",
      "47",
      "50",
      "54",
      "55",
      "55",
      "57",
      "58",
      "64",
    ],
    meteorCodes: ["64", "65", "66", "67", "68", "69", "70", "71"],
    characterCodes: {
      drizzle: "modDrizzle",
      contRain: "heavyContRain",
      interRain: "lightInterRain",
      shower: "modShower",
    },
    windDirection: "SSE",
    windTime: "700",
    submittedAt: "2025-05-04T10:00:26.929Z",
  },
  {
    id: uuidv4(),
    dataType: "10",
    stationNo: "41929", // Faridpur
    year: "25",
    month: "05",
    day: "04",
    measurements: [
      "14",
      "19",
      "24",
      "25",
      "30",
      "31",
      "37",
      "40",
      "43",
      "46",
      "50",
      "51",
      "51",
      "53",
      "54",
      "60",
    ],
    meteorCodes: ["64", "65", "66", "67", "68", "69", "70", "71"],
    characterCodes: {
      drizzle: "lightDrizzle",
      contRain: "modContRain",
      interRain: "heavyInterRain",
      shower: "lightShower",
    },
    windDirection: "SW",
    windTime: "615",
    submittedAt: "2025-05-04T10:15:26.929Z",
  },

  // May 5th data
  {
    id: uuidv4(),
    dataType: "10",
    stationNo: "41923", // Dhaka
    year: "25",
    month: "05",
    day: "05",
    measurements: [
      "17",
      "22",
      "27",
      "28",
      "33",
      "34",
      "40",
      "43",
      "46",
      "49",
      "53",
      "54",
      "54",
      "56",
      "57",
      "63",
    ],
    meteorCodes: ["64", "65", "66", "67", "68", "69", "70", "71"],
    characterCodes: {
      drizzle: "heavyDrizzle",
      contRain: "heavyContRain",
      interRain: "heavyInterRain",
      shower: "heavyShower",
    },
    windDirection: "W",
    windTime: "630",
    submittedAt: "2025-05-05T09:16:26.929Z",
  },
  {
    id: uuidv4(),
    dataType: "10",
    stationNo: "41700", // Joydebpur
    year: "25",
    month: "05",
    day: "05",
    measurements: [
      "18",
      "23",
      "28",
      "29",
      "34",
      "35",
      "41",
      "44",
      "47",
      "50",
      "54",
      "55",
      "55",
      "57",
      "58",
      "64",
    ],
    meteorCodes: ["64", "65", "66", "67", "68", "69", "70", "71"],
    characterCodes: {
      drizzle: "lightDrizzle",
      contRain: "modContRain",
      interRain: "heavyInterRain",
      shower: "lightShower",
    },
    windDirection: "WNW",
    windTime: "700",
    submittedAt: "2025-05-05T09:30:26.929Z",
  },
  {
    id: uuidv4(),
    dataType: "10",
    stationNo: "41886", // Mymensingh
    year: "25",
    month: "05",
    day: "05",
    measurements: [
      "16",
      "21",
      "26",
      "27",
      "32",
      "33",
      "39",
      "42",
      "45",
      "48",
      "52",
      "53",
      "53",
      "55",
      "56",
      "62",
    ],
    meteorCodes: ["64", "65", "66", "67", "68", "69", "70", "71"],
    characterCodes: {
      drizzle: "modDrizzle",
      contRain: "lightContRain",
      interRain: "modInterRain",
      shower: "modShower",
    },
    windDirection: "NW",
    windTime: "645",
    submittedAt: "2025-05-05T09:45:26.929Z",
  },
  {
    id: uuidv4(),
    dataType: "10",
    stationNo: "41909", // Tangail
    year: "25",
    month: "05",
    day: "05",
    measurements: [
      "14",
      "19",
      "24",
      "25",
      "30",
      "31",
      "37",
      "40",
      "43",
      "46",
      "50",
      "51",
      "51",
      "53",
      "54",
      "60",
    ],
    meteorCodes: ["64", "65", "66", "67", "68", "69", "70", "71"],
    characterCodes: {
      drizzle: "lightDrizzle",
      contRain: "lightContRain",
      interRain: "lightInterRain",
      shower: "lightShower",
    },
    windDirection: "NNW",
    windTime: "615",
    submittedAt: "2025-05-05T10:00:26.929Z",
  },
  {
    id: uuidv4(),
    dataType: "10",
    stationNo: "41929", // Faridpur
    year: "25",
    month: "05",
    day: "05",
    measurements: [
      "15",
      "20",
      "25",
      "26",
      "31",
      "32",
      "38",
      "41",
      "44",
      "47",
      "51",
      "52",
      "52",
      "54",
      "55",
      "61",
    ],
    meteorCodes: ["64", "65", "66", "67", "68", "69", "70", "71"],
    characterCodes: {
      drizzle: "modDrizzle",
      contRain: "modContRain",
      interRain: "modInterRain",
      shower: "modShower",
    },
    windDirection: "N",
    windTime: "630",
    submittedAt: "2025-05-05T10:15:26.929Z",
  },
];

// Mock user role - in a real app, this would come from authentication
export const userRole = "super_admin"; // or "observer" or "viewer"
