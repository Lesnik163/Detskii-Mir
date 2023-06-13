'use client';

import { useParams, useRouter } from 'next/navigation';
import { Box, Button, Stack } from '@mui/material';
import ProductDescription from '@/components/product-description';
import { useGetProductByIdQuery } from '@/app/redux/services/product-service';
import ProductDetails from '../../../components/product-details';
import ArrowLeftIcon from '../../../../public/Arrow-left.svg';

export default function ProductPage() {
  const params = useParams();
  const router = useRouter();

  const { data } = useGetProductByIdQuery(params.id);
  if (!data) {
    return null;
  }
  return (
    <Box>
      <Stack direction="column" gap={2}>
        <Button
          startIcon={<ArrowLeftIcon />}
          onClick={() => router.back()}
          sx={{
            position: 'absolute',
            top: 72,
            left: 33,
            fontWeight: 'bold',
            fontSize: 16,
          }}
        >
          Back
        </Button>
        <ProductDetails product={data} />
        <ProductDescription description={data.description} />
      </Stack>
    </Box>
  );
}
