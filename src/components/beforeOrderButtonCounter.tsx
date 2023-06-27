import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { ButtonGroup } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@/app/redux/hooks';
import { increment, decrement } from '@/app/redux/features/beforeOrderCounterSlice';

export default function BeforeOrderButtonCounter() {
  const dispatch = useAppDispatch();
  const quantity = useAppSelector((state) => state.beforeOrderCounterReducer.quantity);
  const [blocked, setBlocked] = useState(false);
  useEffect(() => {
    if (quantity > 9) {
      setBlocked(true);
    } else {
      setBlocked(false);
    }
  }, [quantity]);
  const buttons = [
    <Button onClick={() => dispatch(decrement())} key="one">-</Button>,
    <Button key="two" disabled>{quantity}</Button>,
    <Button onClick={() => dispatch(increment())} key="three" disabled={blocked}>+</Button>,
  ];

  return (

    <ButtonGroup
      size="small"
      aria-label="small button group"
      sx={{
        borderRadius: '12px',
        mr: '2px',
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
