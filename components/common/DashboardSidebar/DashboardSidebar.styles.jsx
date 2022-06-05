import styled from 'styled-components';

export const Container = styled.div`
    width: ${props => (props.sidebarCollapsed ? '60px' : '200px')};
    height: 100vh;
    background: ${props => props.theme.subBackground};
    position: relative;
    transition: all ease 200ms;

    @media (max-width: 768px) {
        position: absolute;
    };
`

export const SidebarToggleButton = styled.button`
    display: flex;
    border-radius: 50%;
    border: none;
    position: absolute;
    bottom: 10px;
    right: ${props => props.sidebarCollapsed ? "50%" : "10px"};
    cursor: pointer;
    transition: ease-in-out 300ms;
    color: ${props => props.theme.color};
    background: transparent;
    transform: ${props => props.sidebarCollapsed ? "translateX(50%)" : "none"};

    :hover{
        box-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.12), 0 1px 2px hsla(0, 0%, 0%,0.24);
    }
`