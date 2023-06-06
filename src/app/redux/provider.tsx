'use client';

import { IChildren } from '@/interfaces/childrenInterface';
import { Provider } from 'react-redux';
import { store } from './store';

export default function Providers({ children }: IChildren) {
  return <Provider store={store}>{children}</Provider>;
}
