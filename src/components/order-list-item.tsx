import {
  Avatar, Box, Card, Stack, Typography,
} from '@mui/material';
import { IOrderItem } from '@/interfaces/order-interface';

export default function OrderListItem(props: {order: IOrderItem[], index: number}) {
  const { order, index } = props;
  // Манипуляции для динамического получения даты
  const date = new Date(`${order[0].createdAt}`);
  const getYear = date.getFullYear();
  let getDate = String(date.getDate());
  if (getDate.length === 1) {
    getDate = `0${getDate}`;
  }
  let getMonth = String(date.getMonth() + 1);
  if (getMonth.length === 1) {
    getMonth = `0${getMonth}`;
  }
  let exactMonth = 'января';
  switch (getMonth) {
    case '01':
      exactMonth = 'января';
      break;
    case '02':
      exactMonth = 'февраля';
      break;
    case '03':
      exactMonth = 'марта';
      break;
    case '04':
      exactMonth = 'апреля';
      break;
    case '05':
      exactMonth = 'мая';
      break;
    case '06':
      exactMonth = 'июня';
      break;
    case '07':
      exactMonth = 'июля';
      break;
    case '08':
      exactMonth = 'августа';
      break;
    case '09':
      exactMonth = 'сентября';
      break;
    case '10':
      exactMonth = 'октября';
      break;
    case '11':
      exactMonth = 'ноября';
      break;
    case '12':
      exactMonth = 'декабря';
      break;
    default:
      exactMonth = 'января';
  }
  // Манипуляции для динамического получения суммы заказа
  let totalCost = 0;
  order.forEach((good) => {
    totalCost += good.quantity * good.product.price;
  });
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
              {`№${index + 1}`}
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
            {`Оформлено ${getDate} ${exactMonth} ${getYear} г.`}
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
            {`${totalCost} ₽`}
          </Typography>
        </Box>
      </Stack>
    </Card>
  );
}
