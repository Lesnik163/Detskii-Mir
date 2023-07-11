'use client';

import {
  useParams, useRouter, useSearchParams,
} from 'next/navigation';
import { Box, Button, Stack } from '@mui/material';
import ProductDescription from '@/components/product-description';
import { useGetProductByIdQuery, useGetProductsQuery } from '@/app/redux/services/product-service';
import Header from '@/components/header';
import { IProduct } from '@/interfaces/product-interface';
import Variants from '@/components/isLoadingForCard';
import { useDispatch } from 'react-redux';
import theme from '@/themes/light-theme';
import { nullify } from '@/app/redux/features/beforeOrderCounterSlice';
import ProductDetails from '../../../components/product-details';
import ArrowLeftIcon from '../../../../public/Arrow-left.svg';

export default function ProductPage() {
  const limit = 20;
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = Number(searchParams.get('page'));
  const currObj = useGetProductsQuery({ page, limit });
  const { data, error, isLoading } = useGetProductByIdQuery(params.id);
  const dispatch = useDispatch();
  const currentPageArr = currObj?.data?.data;

  const findPrevGoodId = (goodsArr: Array<IProduct>, id: string): string => {
    const currentCardInd = goodsArr.findIndex((card) => card.id === id);
    const prevInd = currentCardInd - 1;
    if (prevInd > -1) {
      return goodsArr[prevInd].id;
    }
    return goodsArr[19].id;
  };
  const findNextGoodId = (goodsArr: Array<IProduct>, id: string): string => {
    const currentCardInd = goodsArr.findIndex((card) => card.id === id);
    const nextInd = currentCardInd + 1;
    if (nextInd > 19) {
      return goodsArr[0].id;
    }
    return goodsArr[nextInd].id;
  };
  const routePreviousAndNullify = () => {
    router.replace(`/products/${currentPageArr && findPrevGoodId(currentPageArr, params.id)}?page=${page}&limit=20`);
    dispatch(nullify());
  };
  const routeNextAndNullify = () => {
    router.replace(`/products/${currentPageArr && findNextGoodId(currentPageArr, params.id)}?page=${page}&limit=20`);
    dispatch(nullify());
  };
  return (
    <>
      <Header />
      <Box display="flex" gap="20px" justifyContent="center">
        <Button
          variant="contained"
          sx={{
            backgroundColor: 'warning.main',
            color: 'white',
            mt: '18%',
            height: '40px',
            [theme.breakpoints.down(1400)]: {
              display: 'none',
            },
          }}
          onClick={routePreviousAndNullify}
        >
          Предыдущий
        </Button>

        <Stack
          direction="column"
          gap={2}
          width="57%"
          sx={{
            [theme.breakpoints.down(700)]: {
              width: '80%',
            },
          }}
        >
          <Button
            startIcon={<ArrowLeftIcon />}
            onClick={() => router.back()}
            sx={{
              position: 'absolute',
              top: 45,
              left: 25,
              fontWeight: 'bold',
              fontSize: '16px',
              color: 'warning.main',
            }}
          >
            Назад
          </Button>
          {isLoading && <Variants />}
          {error && <h1>Some has gone wrong...</h1> }
          {data && (
          <>
            <ProductDetails product={data} />
            <Stack display="flex" justifyContent="center" flexDirection="row" gap="20px">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: 'warning.main',
                  color: 'white',
                  mt: '20px',
                  width: '150px',
                  height: '40px',
                  [theme.breakpoints.up(1400)]: {
                    display: 'none',
                  },
                }}
                onClick={routePreviousAndNullify}
              >
                Предыдущий
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: 'warning.main',
                  color: 'white',
                  mt: '20px',
                  width: '150px',
                  height: '40px',
                  [theme.breakpoints.up(1400)]: {
                    display: 'none',
                  },
                }}
                onClick={routeNextAndNullify}
              >
                следующий
              </Button>
            </Stack>
            <ProductDescription description={data.description} />
          </>
          )}
        </Stack>
        <Button
          variant="contained"
          sx={{
            backgroundColor: 'warning.main',
            color: 'white',
            mt: '18%',
            height: '40px',
            [theme.breakpoints.down(1400)]: {
              display: 'none',
            },
          }}
          onClick={routeNextAndNullify}
        >
          следующий
        </Button>
      </Box>
    </>
  );
}
