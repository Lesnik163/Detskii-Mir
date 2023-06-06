import { IProduct } from '@/interfaces/product-interface';
import {
  Card, CardActions, CardContent, CardMedia, Rating, Typography,
} from '@mui/material';
import Link from 'next/link';
import StarIcon from '../../public/StarIcon.svg';
import StarEmptyIcon from '../../public/StarEmptyIcon.svg';

export default function ProductCardItem(props: { product: IProduct}) {
  const { product } = props;
  return (
    <Link href={`/products/${product.id}`} style={{ textDecoration: 'unset' }}>
      <Card
        elevation={0}
        sx={{
          position: 'relative',
          minHeight: 80,
          width: 250,
          borderRadius: '16px',
          border: '2px solid #FFFFFF',
          pb: 4,
          height: '100%',
        }}
      >
        <CardMedia
          component="img"
          image={product.picture}
          alt="product name"
        />
        <CardContent sx={{ pt: '12px' }}>
          <Typography fontSize={16}>
            {product.title}
          </Typography>
          <Rating
            sx={{ gap: '4px' }}
            precision={0.5}
            value={product.rating}
            icon={<StarIcon />}
            emptyIcon={<StarEmptyIcon />}
            readOnly
          />
        </CardContent>
        <CardActions sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          px: 2,
        }}
        >
          <Typography variant="h5" component="div" fontWeight={800}>
            {`${product.price} ₽`}
          </Typography>
        </CardActions>
      </Card>
    </Link>
  );
}
