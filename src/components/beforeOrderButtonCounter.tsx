import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { ButtonGroup } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@/app/redux/hooks';
import { increment, decrement } from '@/app/redux/features/beforeOrderCounterSlice';
import { cartApi } from '@/app/redux/services/cart-service';
import { ICartUpd } from '@/interfaces/cart-interfaces';
import { pushCard } from '@/app/redux/features/counterSlice';

export default function BeforeOrderButtonCounter({ id }:{id:string}) {
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
  //
  const [createCart] = cartApi.useUpdateCartMutation();
  const defineSignAndUpdate = async (evaluate:any) => {
    dispatch(evaluate);
    let result;
    if (evaluate.type === 'beforeOrderCounter/decrement') {
      result = quantity - 1;
    }
    if (evaluate.type === 'beforeOrderCounter/increment') {
      result = quantity + 1;
    }
    await createCart({
      data: [
        {
          id,
          quantity: result,
        },
      ],
    } as ICartUpd)
      .unwrap()
      .then((data) => {
        dispatch(pushCard(data[0]));
        localStorage.setItem(`${id}`, JSON.stringify(data[0]));
      })
      .then((error) => new Error(`${error}`));
  };
  //
  const buttons = [
    <Button onClick={() => defineSignAndUpdate(decrement())} key="one">-</Button>,
    <Button key="two" disabled>{quantity}</Button>,
    <Button onClick={() => defineSignAndUpdate(increment())} key="three" disabled={blocked}>+</Button>,
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
