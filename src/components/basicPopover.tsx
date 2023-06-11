'use client';

import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {
  Box,
  Divider,
  List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack,
} from '@mui/material';
import cartsMock from '@/mockData/cartMock';
import Image from 'next/image';
import ButtonCounter from '@/components/buttonCounter';
import Cart from './cart';

export default function BasicPopover() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Box
      sx={{
        justifySelf: 'end',
      }}
    >
      <Button
        aria-describedby={id}
        variant="text"
        onClick={handleClick}
      >
        <Cart />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        sx={{
          '& .MuiPopover-paper': {
            width: '560px',
            borderRadius: '24px',
            padding: '0 24px',
          },
          backgroundColor: 'secondary',
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <List>
          {cartsMock.map((order) => (
            <React.Fragment key={order.product.id}>
              <ListItem disablePadding button divider>
                <ListItemButton>
                  <ListItemIcon>
                    <Image src={order.product.picture} width={52} height={52} alt="good-img" />
                  </ListItemIcon>
                  <ListItemText primary={order.product.title} />
                </ListItemButton>
                <ButtonCounter />
                <Typography variant="h5" component="div" fontWeight={800} fontSize={20}>
                  { order.product.price }
                  &nbsp;₽
                </Typography>
              </ListItem>
              <Divider sx={{ mx: 2 }} />
            </React.Fragment>
          ))}
          <Stack direction="row" justifyContent="space-between" my={2}>
            <Typography variant="h5" component="div" fontWeight={800} fontSize={20}>
              Итого
            </Typography>
            <Typography variant="h5" component="div" fontWeight={800} fontSize={20}>
              8400
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
