import styled from "styled-components";

const fontSize = {
    sm: '0.8rem',
    md: '1rem',
    lg: '1.8rem'
}

export const Label = styled.label`
    font-family: Arial;
    letter-height: 200;
    font-size: ${props => fontSize[props.size] ?? '1rem'}
`

export const Input = styled.input`
    width: 100%;
    display: block;
    border: ${props => props.error ? '0.1rem solid #ff0000' : '0.1rem solid #c5bfbfff'};
    padding: 0.5rem 1rem;
    border-radius: 3px;
    margin-top: 0.5rem ;
`

export const Error = styled.div`
    font-size: 0.8rem;
    color: #ff0000;
`