import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './styles/index.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SplashScreen from '@components/SplashScreen/SplashScreen';

const Main = lazy(() => import('@components/Main'));
const NotFound = lazy(() => import('@components/NotFound/NotFound'));
const ContactUs = lazy(() => import('@components/ContactUs/ContactUs'));

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={
						<Suspense fallback={<SplashScreen />}>
							<Main />
						</Suspense>
					}
				/>
				<Route
					path='/contact-us'
					element={
						<Suspense fallback={<SplashScreen />}>
							<ContactUs />
						</Suspense>
					}
				/>
				<Route
					path='*'
					element={
						<Suspense fallback={<SplashScreen />}>
							<NotFound />
						</Suspense>
					}
				/>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
