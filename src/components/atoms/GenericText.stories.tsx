import React from 'react';
import { Story, Meta } from '@storybook/react';
import { GenericText } from './GenericText';
import { TypographyProps } from '@mui/material';

export default {
  title: 'Atoms/GenericText',
  component: GenericText,
} as Meta;

const Template: Story<TypographyProps> = (args) => <GenericText {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'This is a generic text',
  variant: 'body1',
};

export const Heading = Template.bind({});
Heading.args = {
  children: 'This is a heading',
  variant: 'h4',
};

