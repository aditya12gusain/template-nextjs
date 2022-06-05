import styled from 'styled-components';

export const Container = styled.div`
    width: ${props => (props.sidebarCollapsed ? '60px' : '200px')};
    height: 100vh;
    background: ${props => props.theme.subBackground};
    position: relative;
    transition: all 200ms ease;
    padding: 0px 10px;
    display: flex;
    flex-direction: column;
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

export const ProfileLink = styled.a`
    height: 60px;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    margin: 0 auto;
    cursor: pointer;
`

export const ProfileImage = styled.img`
    border-radius: 50%;
    height: 35px;
    width: 35px;
    object-fit: cover;
    object-position: center;
`

export const SidebarMenuContainer = styled.div`
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const MenuItem = styled.a`
    width: 95%;
    margin: 0 auto;
    cursor: pointer;
    padding: 6px 8px;

    display: flex;
    align-items: center;
    justify-content: ${props => props.sidebarCollapsed ? "center" : "flex-start"};
    color: ${props => props.theme.subColor};
    border-radius: 4px;
    gap: 0.5rem;
    background: ${props => (props.pathName === props.linkName ? props.theme.background : null)};
    
    :hover{
        background: ${props => props.theme.background}
    }
`


export const DropdownContainer = styled.div`
    min-width: 100%;
    padding: 10px;
    background: ${props => props.theme.subBackground};
    position: absolute;
    z-index: 999;
    left: 100%;
    top: 50%;
    transform: translateY(-50%);
    transition: all 300ms ease;
    border-radius: 5px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
`

export const MenuItemDropdown = styled.div`
    width: 95%;
    margin: 0 auto;
    cursor: pointer;
    padding: 6px 8px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: ${props => props.sidebarCollapsed ? "center" : "flex-start"};
    color: ${props => props.theme.subColor};
    border-radius: 4px;
    gap: 0.5rem;
    
    &:hover{
        background: ${props => props.theme.background}
    }

    /* ${DropdownContainer}{
        display: none;
    } */

    &:hover ${DropdownContainer}{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    ${DropdownContainer}:hover{
        box-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.12), 0 1px 2px hsla(0, 0%, 0%, 0.24);
    }
`
