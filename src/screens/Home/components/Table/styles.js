import styled from 'styled-components';
import { colors } from '../../../../styles';

export const TableContainer = styled.div`
    width: 100%;
    color: ${colors.grayText};

    .img-container {
        display: flex;
        flex-direction: row;
        align-items: center;

        img {
            height: 120px;
            margin-left: 24px;
        }
    }

    .collapse-buttom {
        width: 100%;
        background-color: transparent;
        border: 0;
    }

    .item-marketplace {
        width: 100%;
        margin: 16px 0px;
        display: flex;
        flex-direction: row;
        padding: 24px 32px;

        :hover {
            background-color: #DFDFDF;

            transition: all 0.2s ease-in-out;
        }

        .marketplace-content {
            display: flex;
            flex-direction: column;
            text-align: left;
        }

        .marketplace-content-button {
            padding: 16px 24px;
            background-color: ${colors.footer};
            border: 0;
        }
    }

    @media(max-width: 1200px) {
    }

    @media(max-width: 992px) {
    }

    @media(max-width: 768px) {
    }

    @media(max-width: 576px) {

    }
`;
