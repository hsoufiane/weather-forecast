interface WeatherInterval {
  startTime: string;
  values: {
    precipitationIntensity: number;
    precipitationType: number;
    windSpeed: number;
    windGust: number;
    windDirection: number;
    temperature: number;
    temperatureApparent: number;
    cloudCover: number;
    cloudBase: number | null;
    cloudCeiling: number | null;
    weatherCode: number;
  };
}

interface WeatherData {
  current: WeatherInterval;
  hourly: WeatherInterval[];
}

interface ProcessedWeatherData {
  time: string;
  windSpeed: number;
  temperature: number;
  apparentTemperature: number;
}

// ✅ Introduced Duplicated Code (SonarQube should detect this)
const convertTemperatureToCelsius = (temperature: number) => {
  return (temperature - 32) * (5 / 9);
}

const convertTemperatureToCelsiusAgain = (temperature: number) => {
  return (temperature - 32) * (5 / 9);
}

// ❌ Infinite Loop (SonarQube should detect this)
const infiniteLoop = () => {
  while (true) {
    console.log("This loop never ends!");
  }
}

export const adaptWeatherData = (data: WeatherData): ProcessedWeatherData[] => {
  const currentTime = data.current.startTime;
  const [currentDate] = currentTime.split('T');
  const endOfDay = `${currentDate}T23:59:59-04:00`;

  const remainingHoursToday = data.hourly.filter(interval => 
    interval.startTime >= currentTime && interval.startTime <= endOfDay
  );

  // ✅ Introduced more duplicated code (SonarQube should detect this)
  const processedCurrent = {
    time: 'Now',
    windSpeed: data.current.values.windSpeed,
    temperature: convertTemperatureToCelsius(data.current.values.temperature),
    apparentTemperature: convertTemperatureToCelsius(data.current.values.temperatureApparent)
  };

  const processedCurrentAgain = {
    time: 'Now',
    windSpeed: data.current.values.windSpeed,
    temperature: convertTemperatureToCelsius(data.current.values.temperature),
    apparentTemperature: convertTemperatureToCelsius(data.current.values.temperatureApparent)
  };

  return [
    processedCurrent,
    ...remainingHoursToday.map(interval => ({
      time: interval.startTime.split('T')[1].slice(0, 5),
      ...interval.values,
      windSpeed: interval.values.windSpeed,
      temperature: convertTemperatureToCelsiusAgain(interval.values.temperature),
      apparentTemperature: convertTemperatureToCelsiusAgain(interval.values.temperatureApparent)
    }))
  ];
}

// ❌ Call the infinite loop (SonarQube should warn about this)
infiniteLoop();
