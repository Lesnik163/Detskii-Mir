import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@/app/redux/hooks';
import { increment, decrement } from '@/app/redux/features/counterSlice';
import theme from '@/themes/light-theme';
import { ICartItem } from '@/interfaces/cart-interfaces';
import Limit from './limit';
import CostLimit from './costLimit';

type ButtonCounterProps = {order: ICartItem}
export default function ButtonCounter(props: ButtonCounterProps) {
  const { order } = props;
  const dispatch = useAppDispatch();
  const [productLimit, setProductLimit] = useState(false);
  const [costLimit, setCostLimit] = useState(false);
  const decrease = ():void => {
    if (order.quantity >= 1) {
      dispatch(decrement(order.product.id));
    }
  };
  // Блокировщик кнопок при кол-ве 10шт
  const [blocked, setBlocked] = useState(false);
  useEffect(() => {
    if (order.quantity >= 10) {
      setBlocked(true);
    } else {
      setBlocked(false);
    }
  }, [order]);

  const buttons = [
    <Button onClick={() => dispatch(decrease)} key="one">-</Button>,
    <Button key="two" disabled>{order.quantity}</Button>,
    <Button onClick={() => dispatch(increment(order))} key="three" disabled={blocked}>+</Button>,
  ];
  //
  const allOrders = useAppSelector((state) => state.counterReducer.cartList);
  const findingCard = allOrders?.filter((item) => item.product.id === order.product.id);
  // Проверка , что товаров не более 10шт
  const fondOrderQuantity = findingCard?.[0].quantity;
  useEffect(() => {
    if (fondOrderQuantity === 10) {
      setProductLimit(true);
    } else {
      setProductLimit(false);
    }
  }, [fondOrderQuantity]);
  // Проверка на максимальную стоимость
  let fontOrderPrice;
  if (typeof findingCard !== 'undefined') {
    fontOrderPrice = findingCard?.[0].product?.price;
  }
  let totalOneTypeOrderCost: number = 0;
  if (typeof fontOrderPrice === 'number'
  && typeof fondOrderQuantity === 'number') {
    totalOneTypeOrderCost = fondOrderQuantity * fontOrderPrice;
  }
  useEffect(() => {
    if (totalOneTypeOrderCost >= 20000) {
      setCostLimit(true);
    } else {
      setCostLimit(false);
    }
  }, [fondOrderQuantity, totalOneTypeOrderCost]);

  return (
    <Box display="flex" flexDirection="column">
      <ButtonGroup
        size="small"
        aria-label="small button group"
        sx={{
          borderRadius: '12px',
          mx: 6,
          [theme.breakpoints.down(600)]: {
            mx: 5,
          },
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
      {costLimit && (<CostLimit />)}
      {productLimit && (<Limit />)}
    </Box>
  );
}
