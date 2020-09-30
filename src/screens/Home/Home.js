import React, { useState } from 'react'
import { HomeContainer } from './styles'
import { Table } from './components'
import { CustomModal } from '../../components'

import api from '../../services/api';

const Home = () => {
    const [ products, setProducts ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ modalIsOpen, setIsOpen ] = useState(false);
    const [ product, setProduct ] = useState({})

    const closeModal = () => {
        setIsOpen(false);
    }

    const openModal = item => {
        setProduct(item)
        setIsOpen(true);
    }

    const getStore = () => {
        setIsLoading(true)
        setTimeout(async function() {
            const response = await api.get('/data');
            setProducts(response.data.produtos);
            setIsLoading(false);
        }, 0)
    }

    return (
        <>
            <CustomModal isOpen={modalIsOpen} onRequestClose={closeModal} product={product}/>

            <HomeContainer>
                <div className="container">
                    <h1 className="main-title">Consulta de Anúncio</h1>
                    <button onClick={() => getStore()}>asdasdsds</button>

                    {isLoading ? 'Carregando...' : (
                        <Table tableContent={products} openModal={openModal} />
                    )}

                </div>
            </HomeContainer>
        </>
    )
}

export { Home }