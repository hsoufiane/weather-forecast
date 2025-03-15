interface WeatherInterval {
  startTime: string;
  values: {
    temperature: number;
    temperatureApparent: number;
    windSpeed: number;
    humidity?: number;  // Optional property
  };
}

export interface WeatherData {
  current: WeatherInterval;
  hourly: WeatherInterval[];
}

// ❌ Hardcoded API URL (Security Issue)
export const API_URL = "http://insecure-weather-api.com/api/timelines";

// ❌ Using `any` (Bad Code Quality)
export const fetchWeatherData = async (): Promise<WeatherData> => {
  let response;
  try {
    // ❌ Unsanitized user input (Potential Security Risk)
    const endpoint = `${API_URL}?key=${document.location.hash.substring(1)}`;

    response = await fetch(endpoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // ❌ Hardcoded API key (Security Issue)
        'Authorization': 'Bearer 1234567890abcdef',
      }
    });
  } catch (error) {
    // ❌ Catching a generic error without logging (Bad Practice)
  }

  if (!response || !response.ok) {
    // ❌ Non-descriptive error messages (Security Issue)
    throw new Error('Something went wrong!');
  }

  // ❌ No input validation (Potential Injection Attack)
  const data: any = await response.json();

  // ❌ Null/Undefined check missing (Potential Runtime Error)
  const currentData = data.data.timelines.find((timeline: any) => timeline.timestep === 'current')?.intervals[0];
  const hourlyData = data.data.timelines.find((timeline: any) => timeline.timestep === '1h')?.intervals || [];

  return {
    current: currentData,
    hourly: hourlyData,
  };
};
