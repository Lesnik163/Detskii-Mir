import { decrement, increment } from '@/app/redux/features/beforeOrderCounterSlice';
import { useAppDispatch, useAppSelector } from '@/app/redux/hooks';
// import { IProduct } from '@/interfaces/product-interface';
import { Button, ButtonGroup } from '@mui/material';
import React from 'react';

function ProductDetailsButtonCounter() {
  const quantity = useAppSelector((state) => state.beforeOrderCounterReducer.quantity);
  const dispatch = useAppDispatch();
  const decrease = ():void => {
    if (quantity >= 2) {
      dispatch(decrement());
    }
  };
  const buttons = [
    <Button onClick={() => dispatch(decrease)} key="one">-</Button>,
    <Button key="two" disabled>{quantity}</Button>,
    <Button onClick={() => dispatch(increment())} key="three">+</Button>,
  ];

  return (
    <ButtonGroup
      size="small"
      aria-label="small button group"
      sx={{
        borderRadius: '12px',
        '& .MuiButton-root': {
          color: 'warning.main',
          height: '52px',
          width: '52px',
          fontSize: '25px',
          background: '#E6F1FC',
          borderRadius: '12px',
        },
        '& .MuiButton-root:hover': {
          background: 'linear-gradient(0deg, rgba(0, 115, 230, 0.1), rgba(0, 115, 230, 0.1)), #E6F1FC',
        },
        '& .MuiButton-root:active': {
          background: '#0073E6',
          color: '#ffffff',
        },
        '& .MuiButton-root:disabled': {
          background: 'primary.main',
          fontSize: '16px',
          color: 'black',
          border: 'none',
        },
        '& .MuiButton-root[tab]': {
          background: 'red',
        },
      }}
    >
      {buttons}
    </ButtonGroup>
  );
}

export default ProductDetailsButtonCounter;
