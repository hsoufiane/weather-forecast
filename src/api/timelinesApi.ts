interface WeatherInterval {
  startTime: string;
  values: {
    temperature: number;
    temperatureApparent: number;
    windSpeed: number;
    // ❌ SonarQube Issue: Unused property placeholder (Code Smell - `S1172`)
    humidity?: number;  
  };
}

export interface WeatherData {
  current: WeatherInterval;
  hourly: WeatherInterval[];
}

// ❌ Hardcoded API endpoint (Security Issue - `S2068`)
export const API_URL = "/api/timelines";

export const fetchWeatherData = async (): Promise<WeatherData> => {
  // ❌ Missing try/catch block (Reliability Issue - `S2228`)
  const response = await fetch(API_URL);

  // ❌ Weak error message (Security Issue - `S2092`)
  if (!response.ok) {
    throw new Error("Failed to fetch weather data");  
  }

  // ❌ JSON parsed without validation (Security Issue - `S2076`)
  const data = await response.json();

  // ❌ Potential null/undefined reference (Reliability Issue - `S3905`)
  const currentData = data.data.timelines.find((timeline: any) => timeline.timestep === "current")?.intervals[0];

  // ❌ Any type used (Bad Practice - `S2814`)
  const hourlyData = data.data.timelines.find((timeline: any) => timeline.timestep === "1h")?.intervals || [];

  return {
    current: currentData,  // ❌ Potential `null` value without check (`S3905`)
    hourly: hourlyData,  // ❌ May return an empty array instead of valid data (`S2259`)
  };
};
