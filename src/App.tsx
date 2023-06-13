import React, { Suspense } from 'react';
import './App.css';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './lib/api/queryClient';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import Home from './components/pages/Home';
import { RecoilRoot } from 'recoil';
import Loading from './components/Loading';
import PokemonDetails from './components/pages/PokemonDetails';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Suspense fallback={<Loading />}>
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path={`/pokemon/:name`} element={<PokemonDetails />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </Suspense>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
