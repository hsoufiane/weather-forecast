import { useQuery } from 'react-query';
import { fetchWeatherData, WeatherData } from "../../api/timelinesApi";

export const useTimelinesData = () => {
  return useQuery<WeatherData, Error>(['weatherData'], fetchWeatherData, {
    staleTime: 1000 * 60 * 5, // 5 minutes
    cacheTime: 1000 * 60 * 30, // 30 minutes
    refetchInterval: 1000 * 60 * 15, // Refetch every 15 minutes
  });
};

