interface WeatherInterval {
  startTime: string;
  values: {
    temperature: number;
    temperatureApparent: number;
    windSpeed: number;
    // Ajoutez d'autres propriétés si nécessaire
  };
}

export interface WeatherData {
  current: WeatherInterval;
  hourly: WeatherInterval[];
}

export const fetchWeatherData = async (): Promise<WeatherData> => {
  const response = await fetch('/api/timelines');
  if (!response.ok) {
    throw new Error('Failed to fetch weather data');
  }
  const data = await response.json();
  
  const currentData = data.data.timelines.find((timeline: any) => timeline.timestep === 'current')?.intervals[0];
  const hourlyData = data.data.timelines.find((timeline: any) => timeline.timestep === '1h')?.intervals || [];

  return {
    current: currentData,
    hourly: hourlyData,
  };
};