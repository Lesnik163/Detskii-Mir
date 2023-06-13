import {
  Box, Button, CardMedia, Paper, Rating, Stack, Typography,
} from '@mui/material';
import { IProduct } from '@/interfaces/product-interface';
import StarIcon from '../../public/StarIcon.svg';
import StarEmptyIcon from '../../public/StarEmptyIcon.svg';
import ReturnIcon from '../../public/Return.svg';

export default function ProductDetails({ product }: { product: IProduct }) {
  return (
    <Paper
      elevation={0}
      sx={{
        mx: 'auto',
        p: 2,
        width: '60%',
        maxWidth: '792px',
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
      <Stack>
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
        <Button fullWidth variant="contained" size="large" sx={{ bgcolor: 'warning.main', color: 'white' }}>Добавить в корзину</Button>
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
