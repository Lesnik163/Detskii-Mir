'use client';

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function HeaderTabs() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box sx={{
      alignSelf: 'center',
    }}
    >
      <Tabs
        sx={{
          '& .MuiButtonBase-root': {
            textTransform: 'none',
            fontSize: '16px',
            px: '0px',
            minWidth: '55px',
            mr: '16px',
          },
        }}
        onChange={handleChange}
        value={value}
        centered
      >
        <Tab label="Товары" />
        <Tab label="Заказы" />
      </Tabs>
    </Box>
  );
}
