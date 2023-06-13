'use client';

import { IChildren } from '@/interfaces/childrenInterface';
import ThemeProvider from '@/themes/mui-theme-provider';
import Header from '@/components/header';
import Providers from '../redux/provider';

export default function ProductLayout({ children }: IChildren) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <ThemeProvider>
            <Header />
            {children}
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
