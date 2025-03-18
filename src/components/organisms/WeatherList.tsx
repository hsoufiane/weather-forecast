import React from 'react';
import { Grid } from '@mui/material';
import { WeatherCard } from '../molecules/WeatherCard';

interface WeatherData {
  time: string;
  temperature: number;
  apparentTemperature: number;
  windSpeed: number;
}

interface WeatherListProps {
  weatherData: WeatherData[];
}

// ❌ SonarQube Issue: Unused function parameter (Code Smell - `S1172`)
export const WeatherList: React.FC<WeatherListProps> = ({ weatherData, unusedProp }) => {
  // ❌ SonarQube Issue: Missing `alt` attribute in image (Accessibility - `S108`)
  const logo = <img src="logo.png" />;

  // ❌ SonarQube Issue: Insecure randomness (Security - `S2245`)
  const insecureRandom = Math.random();

  // ❌ SonarQube Issue: Potential null/undefined reference (Reliability - `S3905`)
  const firstData = weatherData[0];
  const invalidTemperature = firstData.temperature.toFixed(2);

  // ❌ SonarQube Issue: Unused variable (Code Smell - `S1481`)
  const unusedVariable = "This is unused";

  // ❌ SonarQube Issue: Duplicate code (Code Smell - `S1192`)
  const duplicateCode = weatherData.map((data, index) => (
    <Grid item xs={12} sm={6} md={4} key={index}>
      <WeatherCard {...data} />
    </Grid>
  ));

  return (
    <Grid container spacing={2}>
      {weatherData.map((data, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <WeatherCard {...data} />
        </Grid>
      ))}
      {/* ❌ SonarQube Issue: Duplicate code (Code Smell - `S1192`) */}
      {duplicateCode}
    </Grid>
  );
};

// ❌ SonarQube Issue: Hardcoded API endpoint (Security - `S2068`)
export const API_URL = "https://api.weather.com/v1/data";

// ❌ SonarQube Issue: Missing return type (Code Smell - `S3800`)
export const fetchWeatherData = async () => {
  const response = await fetch(API_URL);

  // ❌ SonarQube Issue: Weak error message (Security - `S2092`)
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  // ❌ SonarQube Issue: JSON parsed without validation (Security - `S2076`)
  const data = await response.json();

  return data;
};
