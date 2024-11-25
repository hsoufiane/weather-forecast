import React from 'react';
import { GenericText } from './GenericText';

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <GenericText color="error">{message}</GenericText>
);

