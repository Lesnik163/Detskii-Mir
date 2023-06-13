import {
  Avatar, Box, Card, Stack, Typography,
} from '@mui/material';
import orderListFixture from '@/mockData/order-list-mock';

export default function OrderListItem() {
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
            {[1, 2, 3].map((el) => (
              <Avatar
                key={el}
                variant="rounded"
                alt="Remy Sharp"
                src={orderListFixture[0].products[0].product.picture}
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
