/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */

'use client';

import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import Image from 'next/image';
import Box from '@mui/material/Box';
import { useAppSelector } from '@/app/redux/hooks';

export default function Cart() {
  const [goodListLength, setGoodListLength] = useState(0);
  const cartList = useAppSelector((state) => state.counterReducer.cartList);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storageLength: number = localStorage.length;
      setGoodListLength(storageLength);
    }
  }, [goodListLength, cartList]);
  const cartQuantity = cartList?.length === 0 ? goodListLength : cartList?.length;
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
        {`Корзина (${cartQuantity})`}
      </Typography>
    </Box>
  );
}
