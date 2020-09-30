import React from 'react';
import { Router } from 'react-router-dom';
import { Header, Footer } from './components'
import Modal from 'react-modal';
import { Routes } from './util'
import history from './services/history';

import GlobalStyle from './styles/globalstyle'

Modal.setAppElement('#root')

function App() {
    return (
        <Router history={history}>
            <Header />
            <Routes />
            <GlobalStyle />
            <Footer />
        </Router>
    );
}

export default App;
