/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */

'use client';

import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import Image from 'next/image';
import Box from '@mui/material/Box';
// import { useAppSelector } from '@/app/redux/hooks';
// import { useEffect } from 'react';

export default function Cart() {
  const [goodListLength, setGoodListLength] = useState(0);
  // const cartList = useAppSelector((state) => state.counterReducer.cartList);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line react-hooks/exhaustive-deps, no-unused-vars
      const storageLength: number = localStorage.length;
      setGoodListLength(storageLength);
    }
  }, []);
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
        {`Корзина (${goodListLength})`}
      </Typography>
    </Box>
  );
}
