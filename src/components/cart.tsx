'use client';

import * as React from 'react';
import { Typography } from '@mui/material';
import Image from 'next/image';
import Box from '@mui/material/Box';

export default function Cart() {
  return (
    <Box
      sx={{
        display: 'grid',
        justifyContent: 'end',
        alignItems: 'center',
        gridTemplateColumns: '20px 95px',
        gap: '5px',
        mr: '32px',
      }}
    >
      <Image src="/Basket.svg" width={20} height={20} alt="Blue Cube" />
      <Typography
        sx={{ color: 'black', textTransform: 'none' }}
      >
        Корзина (2)
      </Typography>
    </Box>
  );
}
