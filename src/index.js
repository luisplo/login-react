import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Router from './routes'

ReactDOM.render(
	<HelmetProvider>
		<BrowserRouter>
			<Router />
		</BrowserRouter>
	</HelmetProvider>,
	document.getElementById('root')
);
