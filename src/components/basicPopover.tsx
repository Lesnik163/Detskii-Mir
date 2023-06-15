'use client';

import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {
  Box,
  Divider,
  List, ListItemAvatar, ListItemText, Stack,
} from '@mui/material';
import Image from 'next/image';
import ButtonCounter from '@/components/buttonCounter';
import { useAppSelector } from '@/app/redux/hooks';
import Cart from './cart';

export default function BasicPopover() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const cartList = useAppSelector((state) => state.counterReducer.cartList);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  //
  const fullCost = cartList.map((item) => item.product.price * item.quantity)
    .reduce((accumulator, currValue) => accumulator + currValue);
  return (
    <Box
      sx={{
        justifySelf: 'end',
      }}
    >
      <Typography
        sx={{ cursor: 'pointer' }}
        onClick={handleClick}
      >
        <Cart />
      </Typography>
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
        <List>
          {cartList.map((order) => (
            <React.Fragment key={order.product.id}>
              <Box display="flex" alignItems="center" height="52px" py={5}>
                <ListItemAvatar sx={{ minWidth: 'unset', pr: '10px' }}>
                  <Image src={order.product.picture} width={52} height={52} alt="good-img" placeholder="blur" blurDataURL={order.product.picture} />
                </ListItemAvatar>
                <ListItemText primary={order.product.title} />
                <ButtonCounter order={order} />
                <Typography variant="h5" component="div" fontWeight={800} fontSize={20} width={100} textAlign="center">
                  { order.product.price * order.quantity }
                  &nbsp;₽
                </Typography>
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
            variant="contained"
            sx={{
              borderRadius: '12px', fontSize: '16px', fontWeight: 'bold', background: '#0073E6', color: 'white', mb: '14px',
            }}
            fullWidth
          >
            Оформить заказ
          </Button>
        </List>
      </Popover>
    </Box>
  );
}
