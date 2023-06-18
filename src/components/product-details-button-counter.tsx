import { decrement, increment } from '@/app/redux/features/counterSlice';
import { useAppDispatch } from '@/app/redux/hooks';
import { ICartItem } from '@/interfaces/cart-interfaces';
import { Button, ButtonGroup } from '@mui/material';
import React from 'react';

type ProductDetailsButtonCounterProps = {order: ICartItem}
function ProductDetailsButtonCounter(props: ProductDetailsButtonCounterProps) {
  const { order } = props;
  const dispatch = useAppDispatch();
  const decrease = ():void => {
    if (order.quantity >= 1) {
      dispatch(decrement(order.product.id));
    }
  };
  const buttons = [
    <Button onClick={() => dispatch(decrease)} key="one">-</Button>,
    <Button key="two" disabled>{order.quantity}</Button>,
    <Button onClick={() => dispatch(increment(order.product.id))} key="three">+</Button>,
  ];

  return (
    <ButtonGroup
      size="small"
      aria-label="small button group"
      sx={{
        borderRadius: '12px',
        mx: 6,
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
