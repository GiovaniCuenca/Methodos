import styled from 'styled-components'
import { colors } from '../../styles'

export const CustomModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 960px;
    padding: 24px;

    @media(max-width: 1200px) {
    }

    @media(max-width: 768px) {
        width: 100%;
        padding: 8px;
    }

    @media(max-width: 576px) {
    }
`;

export const CloseButton = styled.button`
    border: 0;
    cursor: pointer;
    background-color: transparent;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    position: absolute;
    top: 0px;
    right: 0px;
    transition: all 0.2s ease-in-out;

    svg {
        color: ${colors.mainSecondary};
    }

    :hover {
        svg {
            color: ${colors.mainPrimary};
            transition: all 0.2s ease-in-out;
        }
    }
`;
