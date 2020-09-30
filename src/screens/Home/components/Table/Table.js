import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { Row, Col } from 'react-grid-system'
import { FiPlus, FiMinus } from 'react-icons/fi'
import { Collapse } from 'react-collapse'

import { TableContainer } from './styles'

const Table = ({ tableContent, openModal }) => {
    const [selected, setSelected] = useState('');

    const calculateMarketplace = (empresas, condition) => {
        const qty = []

        switch (condition) {
            case 'qtd_vendida':
                empresas.lojas.map(teste => (
                    qty.push(teste.qtd_vendida)
                ));
                break;
            case 'estoque':
                empresas.lojas.map(teste => (
                    qty.push(teste.estoque)
                ));
                break;
            default:
        }

        const sum = qty.reduce(function (a, b) {
            return a + b;
        }, 0)

        return sum + ' un';
    }

    const handleOpen = index => {
        if (selected === index) {
            setSelected('')
            return;
        }
        setSelected(index)
    }

    return (
        <TableContainer>
            <Row gutterWidth={0} style={{ paddingTop: '8px', paddingBottom: '8px', borderBottom: '1px solid #00AABC' }}>
                <Col xs={12} md={2}>
                    <h3 className="main-subtitle">Imagem</h3>
                </Col>
                <Col xs={12} md={2}>
                    <h3 className="main-subtitle">Descrição</h3>
                </Col>
                <Col xs={12} md={2}>
                    <h3 className="main-subtitle">Marketplace</h3>
                </Col>
                <Col xs={12} md={2}>
                    <h3 className="main-subtitle">Lojas</h3>
                </Col>
                <Col xs={12} md={2} style={{ textAlign: 'center' }}>
                    <h3 className="main-subtitle">Qtds Vendidas</h3>
                </Col>
                <Col xs={12} md={2} style={{ textAlign: 'center' }}>
                    <h3 className="main-subtitle">Estoque Loja</h3>
                </Col>
            </Row>

            {tableContent && tableContent.map((item, index) => (
                <>
                    <button className="collapse-buttom" onClick={() => handleOpen(index)}>
                        <Row gutterWidth={0} key={item.codigo} align="center" style={{ padding: '24px 0px', borderBottom: '1px solid #CCCCCC' }}>
                            <Col xs={12} md={2}>
                                <div className="img-container">
                                    {selected === index ? (
                                        <FiMinus size={20} color={'#2B2B2B'} />
                                    ) : (
                                            <FiPlus size={20} color={'#2B2B2B'} />
                                        )}

                                    <img src={item.imagens[0].link} alt={`${item.marca} - ${item.descricao} - ${item.color}`} />
                                </div>
                            </Col>
                            <Col xs={12} md={2} style={{ textAlign: 'left' }}>
                                <p className="main-content">{item.descricao}</p>
                            </Col>
                            <Col xs={12} md={2} style={{ textAlign: 'left' }}>
                                <p className="main-content">{item.martketplaces.length > 1 ? `${item.martketplaces[0].empresa} + ${item.martketplaces.length - 1}` : item.martketplaces[0].empresa}</p>
                            </Col>
                            <Col xs={12} md={2} style={{ textAlign: 'left' }}>
                                <p className="main-content">
                                    {item.martketplaces[0].lojas.length > 1 ? `${item.martketplaces[0].lojas[0].unidade} + ${item.martketplaces[0].lojas.length - 1}` : item.martketplaces[0].lojas[0].unidade}
                                </p>
                            </Col>
                            <Col xs={12} md={2} style={{ textAlign: 'center' }}>
                                {item.martketplaces.map((empresas, index) => (
                                    <p className="main-content" key={index}>
                                        {calculateMarketplace(empresas, 'qtd_vendida')}
                                    </p>
                                ))}
                            </Col>
                            <Col xs={12} md={2} style={{ textAlign: 'center' }}>
                                {item.martketplaces.map((empresas, index) => (
                                    <p className="main-content" key={index}>
                                        {calculateMarketplace(empresas, 'estoque')}
                                    </p>
                                ))}
                            </Col>
                        </Row>
                    </button>
                    <Collapse isOpened={selected === index}>
                        {item.martketplaces.map((empresa, index) => (
                            <div className="item-marketplace" key={index}>
                                <Row gutterWidth={0} style={{ width: '100%' }}>
                                    <Col md={2}>
                                        <div className="marketplace-content">
                                            <h4 className="main-subtitle">Marketplace</h4>
                                            <p className="main-content">{empresa.empresa}</p>
                                        </div>
                                    </Col>
                                    <Col md={2}>
                                        <div className="marketplace-content">
                                            <h4 className="main-subtitle">Lojas</h4>
                                            <p className="main-content">{empresa.empresa}</p>
                                        </div>
                                    </Col>
                                    <Col md={2}>
                                        <div className="marketplace-content">
                                            <h4 className="main-subtitle">Preço</h4>
                                            <p className="main-content">{empresa.empresa}</p>
                                        </div>
                                    </Col>
                                    <Col md={2}>
                                        <div className="marketplace-content">
                                            <h4 className="main-subtitle">Qtds Vendidas</h4>
                                            <p className="main-content">{empresa.empresa}</p>
                                        </div>
                                    </Col>
                                    <Col md={2}>
                                        <div className="marketplace-content">
                                            <h4 className="main-subtitle">Estoque Loja</h4>
                                            <p className="main-content">{empresa.empresa}</p>
                                        </div>
                                    </Col>
                                    <Col md={2}>
                                        <div className="marketplace-content">
                                            <button className="marketplace-content-button" onClick={() => openModal(item)}>Visualizar</button>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        ))}
                    </Collapse>
                </>
            ))}

        </TableContainer>
    )
}

Table.propTypes = {
    tableContent: PropTypes.array,
}

export { Table }