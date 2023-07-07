import {
  Box, Button, CardMedia, Paper, Rating, Stack, Typography,
} from '@mui/material';
import React, { useState, useEffect } from 'react';
import { IProduct } from '@/interfaces/product-interface';
import { useParams } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/app/redux/hooks';
import { nullify } from '@/app/redux/features/beforeOrderCounterSlice';
import { pushCard } from '@/app/redux/features/counterSlice';
import StarIcon from '../../public/StarIcon.svg';
import StarEmptyIcon from '../../public/StarEmptyIcon.svg';
import ReturnIcon from '../../public/Return.svg';
import BeforeOrderButtonCounter from './beforeOrderButtonCounter';
import Limit from './limit';
import CostLimit from './costLimit';
import CartContentLimiter from './byCartContentLimit';

export default function ProductDetails(
  { product }: { product: IProduct },
) {
  const [productLimit, setProductLimit] = useState(false);
  const [costLimit, setCostLimit] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [isAddedToCart, setAddedToCart] = useState(false);
  const params = useParams();
  const dispatch = useAppDispatch();
  // Получаем из хранилища состояние корзины по блокировке заказа по цене и количеству
  const blocked = useAppSelector((state) => state.counterReducer.blocked);

  const changeBtn = () => {
    setAddedToCart(!isAddedToCart);
    dispatch(nullify); // обнуляет счётчик
  };
  const quantity = useAppSelector((state) => state.beforeOrderCounterReducer.quantity);
  // Проверка , что товаров не более 10шт
  useEffect(() => {
    if (quantity === 10) {
      setProductLimit(true);
    } else {
      setProductLimit(false);
    }
  }, [quantity]);
  // Проверка , что сумма заказа не более 20000р
  useEffect(() => {
    if (quantity * product.price >= 20000) {
      setCostLimit(true);
    }
    if (quantity * product.price <= 20000) {
      setCostLimit(false);
    }
  }, [product.price, quantity]);
  // Блокировщик кнопки оформления заказа
  useEffect(() => {
    if (productLimit || costLimit) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [productLimit, costLimit]);
  // Процедура напонения store состоянием из LocalStorage, если store пуст
  const cartList = useAppSelector((state) => state.counterReducer.cartList);
  useEffect(() => {
    if (typeof window !== 'undefined' && cartList?.length === 0) {
      // eslint-disable-next-line react-hooks/exhaustive-deps, no-unused-vars
      const locStorageArr = Object.entries(localStorage);
      const parsedLocStorageArr = locStorageArr.map((item) => JSON.parse(item[1]));
      for (let i = 0; i < parsedLocStorageArr.length; i += 1) {
        dispatch(pushCard(parsedLocStorageArr[i]));
      }
    }
  }, [cartList, dispatch]);

  return (
    <Paper
      elevation={0}
      sx={{
        mx: 'auto',
        p: 2,
        columnCount: 2,
        borderRadius: '16px',
      }}
    >
      <Box>
        <CardMedia
          component="img"
          image={product.picture}
          height="100%"
          width="100%"
          alt="product"
        />
      </Box>
      <Stack width={370}>
        <Typography
          fontSize={20}
          fontWeight="bold"
        >
          {product.title}
        </Typography>
        <Rating
          sx={{ gap: '4px', mt: 1 }}
          precision={0.5}
          value={product.rating}
          icon={<StarIcon />}
          emptyIcon={<StarEmptyIcon />}
          readOnly
        />
        <Typography variant="h5" component="div" fontWeight={800} mt={2} mb={1}>
          {`${product.price} ₽`}
        </Typography>

        {!isAddedToCart && (
        <Button
          component="div"
          onClick={changeBtn}
          fullWidth
          variant="contained"
          size="large"
          sx={{ bgcolor: 'warning.main', color: 'white' }}
        >
          Добавить в корзину

        </Button>
        )}
        {isAddedToCart && (
        <>
          <Box display="flex" gap={1} width={360}>
            <Box>
              <BeforeOrderButtonCounter id={params.id} />
            </Box>
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: 'warning.main', color: 'white', width: '200px', borderRadius: '12px',
              }}
              disabled={disabled || blocked}
            >
              Оформить заказ
            </Button>
          </Box>
          {productLimit && (<Limit />)}
          {costLimit && (<CostLimit />)}
          {blocked && (<CartContentLimiter />)}
        </>
        )}
        <Stack direction="row" mt={2} mb={1} gap={1} alignItems="center">
          <ReturnIcon />
          <Typography fontWeight="bold">
            Условия возврата
          </Typography>
        </Stack>
        <Typography>
          Обменять или вернуть товар надлежащего качества можно в течение
          14 дней с момента покупки.
        </Typography>
        <Typography color="text.secondary" fontSize={12} mt={2}>
          Цены в интернет-магазине могут отличаться от розничных магазинов.
        </Typography>
      </Stack>
    </Paper>
  );
}
