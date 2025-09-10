import styled from "styled-components";

const fontSize = {
    sm: '0.8rem',
    md: '1rem',
    lg: '1.6rem'
}

export const SubmitButton = styled.button`
    width: 100%;
    font-size: ${props => fontSize[props.size] ?? '1rem'};
    padding: 0.3rem; 
    letter-spacing: 1px;
    margin-top: 5px;
`