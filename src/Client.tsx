import React from "react";
import App from './App';
import {createRoot, hydrateRoot} from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import { loadableReady } from '@loadable/component'

if (!IS_DEV) {
    loadableReady(() => {
        const container = document.getElementById('root') as HTMLElement
        const AppContainer = (
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        )

        hydrateRoot(container, AppContainer)
    })
} else {
    const container = document.getElementById('root') as HTMLElement
    const AppContainer = (
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    )

    createRoot(container).render(AppContainer)
}

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            // .register(IS_SPA ? 'sw.js' : serviceWorkerPath)
            .register(IS_DEV ? 'sw.js' : '/sw.js')
            .then(
                () => {
                    console.info('Offline service worker successfully installed');
                },
                error => {
                    console.error('ServiceWorker registration failed: ', error);
                }
            );
    });
}