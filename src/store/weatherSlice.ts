import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { fetchWeatherData } from '../api/weatherApi';

export interface WeatherData {
  time: string;
  windSpeed: number;
  temperature: number;
  apparentTemperature: number;
}

interface WeatherState {
  data: WeatherData[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: WeatherState = {
  data: [],
  status: 'idle',
  error: null,
};

export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async () => {
    const response = await fetchWeatherData();
    return response.map((item: any) => ({
      time: new Date(item.startTime).toLocaleTimeString(),
      windSpeed: item.values.windSpeed,
      temperature: item.values.temperature,
      apparentTemperature: item.values.temperatureApparent,
    }));
  }
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchWeather.fulfilled, (state, action: PayloadAction<WeatherData[]>) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default weatherSlice.reducer;

