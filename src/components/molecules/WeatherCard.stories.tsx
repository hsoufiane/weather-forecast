import React from 'react';
import { Story, Meta } from '@storybook/react';
import { WeatherCard } from './WeatherCard';

export default {
  title: 'Molecules/WeatherCard',
  component: WeatherCard,
} as Meta;

const Template: Story<React.ComponentProps<typeof WeatherCard>> = (args) => <WeatherCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  time: '12:00',
  temperature: 25,
  apparentTemperature: 27,
  windSpeed: 5,
};

export const Cold = Template.bind({});
Cold.args = {
  time: '18:00',
  temperature: 10,
  apparentTemperature: 8,
  windSpeed: 8,
};

