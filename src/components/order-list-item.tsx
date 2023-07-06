import {
  Avatar, Box, Card, Stack, Typography,
} from '@mui/material';
import { IOrderItem } from '@/interfaces/order-interface';

export default function OrderListItem(props: {order: IOrderItem[]}) {
  const { order } = props;
  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: '16px',
        p: 3,
      }}
    >
      <Stack direction="row" justifyContent="space-between">
        <Box display="flex">
          <Stack direction="column" mr={2}>
            <Typography color="text.secondary" fontWeight="bold">
              Заказ
            </Typography>
            <Typography fontSize={20} fontWeight="bold">
              №344300
            </Typography>
          </Stack>
          <Stack direction="row" gap={1} alignItems="center">
            {order.map((el) => (
              <Avatar
                key={Number(el.product.id + Math.round(Math.random() * 100))}
                variant="rounded"
                alt="Remy Sharp"
                src={el.product.picture}
              />
            ))}
          </Stack>
        </Box>
        <Box
          display="grid"
          gridTemplateRows="repeat(2, 1fr)"
          gridTemplateColumns="repeat(2, 1fr)"
          columnGap={1}
        >
          <Typography
            color="text.secondary"
            fontWeight="bold"
            textAlign="right"
          >
            Оформлено
          </Typography>
          <Typography
            fontWeight="bold"
            textAlign="left"
          >
            1 января 2023 г
          </Typography>
          <Typography
            color="text.secondary"
            fontWeight="bold"
            textAlign="right"
          >
            На сумму
          </Typography>
          <Typography
            fontWeight="bold"
            textAlign="left"
          >
            8 324 ₽
          </Typography>
        </Box>
      </Stack>
    </Card>
  );
}
