'use client';

import React, { useState, useEffect } from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {
  Box,
  Divider,
  List, ListItemAvatar, ListItemText, Stack,
} from '@mui/material';
import Image from 'next/image';
import { useAppSelector } from '@/app/redux/hooks';
import ButtonCounter from '@/components/buttonCounter';
import { useDispatch } from 'react-redux';
import { deleteCard, deleteCartList, blockOrder } from '@/app/redux/features/counterSlice';
// import { pushOrder } from '@/app/redux/features/orderSlice';
import theme from '@/themes/light-theme';
import { cartApi } from '@/app/redux/services/cart-service';
import { ICartItem, ICartUpd } from '@/interfaces/cart-interfaces';
import Cart from './cart';
import CostLimit from './costLimit';
import DeleteCart from '../../public/DeleteCart.svg';
import DeleteCartOrange from '../../public/DeleteCartOrange.svg';

export default function BasicPopover() {
  const [fullCostLimit, setFullCostLimit] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const [icon, setIcon] = useState(<DeleteCartOrange />);
  const [color, setColor] = useState('rgba(237, 44, 25, 1)');
  const [cartNaming, setCartNaming] = useState('Корзина пуста. Необходимо выбрать товар!');
  const dispatch = useDispatch();
  // Получаем массив из counterSlice
  const cartList = useAppSelector((state) => state.counterReducer.cartList);
  // Если массив пуст получаем из LocStorage в файле product-details
  useEffect(() => {
  }, [cartList]);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const fullCost = cartList?.length !== 0
    ? cartList?.map((item) => item.product.price * item.quantity)
      .reduce((accumulator, currValue) => accumulator + currValue) : ' ';
  // Проверка на общую стоимость не более 20 т.р.
  useEffect(() => {
    if (typeof fullCost === 'number' && fullCost >= 20000) {
      setFullCostLimit(true);
      dispatch(blockOrder(true));
    } else {
      setFullCostLimit(false);
      dispatch(blockOrder(false));
    }
  }, [fullCost, dispatch]);
  // Выбор цветов и иконок в взависимости от количества 0 или до 10шт
  const changeToBrightIcon = () => {
    setIcon(<DeleteCart />);
    setColor('rgba(237, 44, 25, 1)');
  };
  const changeToDimIcon = () => {
    setIcon(<DeleteCartOrange />);
    setColor('rgba(237, 44, 25, 0.7)');
  };
  const [updateCart] = cartApi.useUpdateCartMutation();
  const [submitCart] = cartApi.useSubmitCartMutation();

  const getAllOrdersAndFinallyUpdate = async () => {
    // Вначале получим массив товаров с количеством товара на заказ != 0
    const arrWithoutZeroQuantityItem = cartList?.filter((item) => item.quantity !== 0);
    const forUpdateArr = arrWithoutZeroQuantityItem?.map((item) => ({
      id: item.product.id,
      quantity: item.quantity,
    }));
    await updateCart({
      data: forUpdateArr,
    } as ICartUpd)
      .unwrap()
      .then((data) => submitCart(data as ICartItem[]));
    dispatch(deleteCartList());
    setCartNaming('Заказ успешно выполнен. Заказывайте ещё!');
  };

  return (
    <Box
      sx={{
        justifySelf: 'end',
      }}
    >
      <Button
        sx={{ cursor: 'pointer' }}
        onClick={handleClick}
      >
        <Cart />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        onClose={handleClose}
        sx={{
          '& .MuiPopover-paper': {
            width: '560px',
            borderRadius: '24px',
            padding: '0 24px',
          },
          backgroundColor: 'secondary',
        }}
      >
        {cartList?.length !== 0
          ? (
            <List>
              {cartList?.map((order) => (
                <React.Fragment key={order.product.id}>
                  <Box display="flex" alignItems="center" height="52px" py={5}>
                    <ListItemAvatar sx={{ minWidth: 'unset', pr: '10px' }}>
                      <Image src={order.product.picture} width={52} height={52} alt="good-img" placeholder="blur" blurDataURL={order.product.picture} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={order.product.title}
                      sx={{
                        overflow: 'hidden',
                        height: '50px',
                        width: '20px',
                        [theme.breakpoints.down(600)]: {
                          display: 'none',
                        },
                      }}
                    />
                    <ButtonCounter order={order} />
                    <Box display="flex" flexDirection="column">
                      <Typography variant="h5" component="div" fontWeight={300} fontSize={12} width={100} textAlign="center">
                        {`${order.product.price}₽ за шт.`}
                      </Typography>
                      <Typography variant="h5" component="div" fontWeight={800} fontSize={20} width={100} textAlign="center">
                        { (order.product.price * order.quantity) !== 0
                          ? (`${order.product.price * order.quantity}₽`)
                          : (
                            <Button
                              startIcon={icon}
                              variant="text"
                              onMouseEnter={() => changeToBrightIcon()}
                              onMouseLeave={() => changeToDimIcon()}
                              onClick={() => dispatch(deleteCard(order.product.id))}
                              sx={{
                                color: { color },
                                fontWeight: '900',
                              }}
                            >
                              удалить
                            </Button>

                          )}
                      </Typography>
                    </Box>
                  </Box>
                  <Divider sx={{ mx: 2 }} />
                </React.Fragment>
              ))}
              <Stack direction="row" justifyContent="space-between" my={2}>
                <Typography variant="h5" component="div" fontWeight={800} fontSize={20}>
                  Итого
                </Typography>
                <Typography variant="h5" component="div" fontWeight={800} fontSize={20}>
                  {fullCost}
              &nbsp;₽
                </Typography>
              </Stack>
              <Button
                disabled={fullCostLimit}
                variant="contained"
                onClick={getAllOrdersAndFinallyUpdate}
                sx={{
                  borderRadius: '12px', fontSize: '16px', fontWeight: 'bold', background: '#0073E6', color: 'white', mb: '14px',
                }}
                fullWidth
              >
                Оформить заказ
              </Button>
              {fullCostLimit && (<CostLimit />)}
            </List>
          )
          : (
            <Box
              height="40px"
              color="warning.main"
              textAlign="center"
              py="8px"
              fontSize="17px"
            >
              {cartNaming}
            </Box>
          )}
      </Popover>
    </Box>
  );
}
