import styled from 'styled-components';
import { Link } from 'react-router-dom'; 
import { FaTimes } from 'react-icons/fa';

export const SidebarContainer = styled.aside `
    position: fixed;
    z-index: 999;
    width: 25%;
    height: 100%;
    background: #404042;
    display: grid;
    align-items: center;
    bottom: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    box-shadow: 3px 5px 5px #404042;
`;

export const CloseIcon = styled(FaTimes) `
    color: #fff;
`;

export const Icon = styled.div ` 
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarWrapper = styled.div ` 
    color: #fff;
`

export const SidebarMenu = styled.ul ` 
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 5rem);
    
    /* text-align: center; */


    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6, 4rem);
        padding: 1.5rem;
    }
`

export const SidebarLink = styled(Link)` 
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #e5e5e5;
    cursor: pointer;

    &:hover {
        color: #94BCE2;
        transition: 0.2s ease-in-out;
    }

    @media screen and (max-width: 480px){
        font-size: 1rem;
    }
`