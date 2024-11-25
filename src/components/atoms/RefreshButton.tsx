import React from 'react';
import { Button, ButtonProps, CircularProgress } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';

interface RefreshButtonProps extends ButtonProps {
  onRefresh: () => void;
  isLoading: boolean;
}

export const RefreshButton: React.FC<RefreshButtonProps> = ({ onRefresh, isLoading, ...props }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={isLoading ? <CircularProgress size={20} color="inherit" /> : <RefreshIcon />}
      onClick={onRefresh}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? 'Loading...' : 'Refresh'}
    </Button>
  );
};

