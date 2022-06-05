import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    position: relative;
`

export const MainContainer = styled.div`
    flex: auto;
    padding-left: 0;
    
    @media (max-width: 768px) {
        padding-left: ${props => props.sidebarCollapsed ? "60px" : "0"}
    };
`