import styled from 'styled-components';

export const Container = styled.div`
    height: 60px;
    padding: 0 20px;
    background: ${props => props.theme.subBackground};
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-left: solid 1.5px ${props => props.theme.background};
`