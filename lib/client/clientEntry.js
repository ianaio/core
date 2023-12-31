/**
 * Copyright (c) IANA SYSTEMS, Inc. and its affiliates.
 *
 * This source code is licensed under the IANA SYSTEMS license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ExecutionEnvironment from './exports/ExecutionEnvironment';
import App from './App';
import preload from './preload';
import ianaio from './ianaio';
// Client-side render (e.g: running in browser) to become single-page
// application (SPA).
if (ExecutionEnvironment.canUseDOM) {
    window.ianaio = ianaio;
    // For production, attempt to hydrate existing markup for performant
    // first-load experience.
    // For development, there is no existing markup so we had to render it.
    // We also preload async component to avoid first-load loading screen.
    const renderMethod = process.env.NODE_ENV === 'production' ? ReactDOM.hydrate : ReactDOM.render;
    preload(window.location.pathname).then(() => {
        renderMethod(<HelmetProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </HelmetProvider>, document.getElementById('__ianaio'));
    });
    // Webpack Hot Module Replacement API
    if (module.hot) {
        // Self-accepting method/ trick
        // (https://github.com/webpack/webpack-dev-server/issues/100#issuecomment-290911036)
        module.hot.accept();
    }
}

