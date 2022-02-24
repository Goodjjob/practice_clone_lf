import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import TestReactQuery from './pages/TestReactQuery/TestReactQuery';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <div className="App">
        <TestReactQuery id={'1'}/>
      </div>
    </QueryClientProvider>
  )
}
