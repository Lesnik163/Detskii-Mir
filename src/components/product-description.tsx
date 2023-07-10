import { Paper, Typography } from '@mui/material';
import theme from '@/themes/light-theme';

export default function ProductDetails({ description }: { description: string }) {
  return (
    <Paper
      elevation={0}
      sx={{
        mx: 'auto',
        borderRadius: '16px',
        [theme.breakpoints.down(1400)]: {
          alignSelf: 'center',
          minWidth: '250px',
        },
      }}
    >
      <Typography
        dangerouslySetInnerHTML={{ __html: description }}
        p={2}
      />
    </Paper>
  );
}
