'use client';

import * as React from 'react';
import { Typography } from '@mui/material';
import Image from 'next/image';
import Box from '@mui/material/Box';
import { useAppSelector } from '@/app/redux/hooks';

export default function Cart() {
  const cartList = useAppSelector((state) => state.counterReducer.cartList);
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
        { `Корзина (${cartList.length})`}
      </Typography>
    </Box>
  );
}
