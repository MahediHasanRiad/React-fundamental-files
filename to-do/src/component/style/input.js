import styled from "styled-components";

export const InputStyle = styled.input`
    width: 80%;
    border: ${props => props.error ? '0.2px solid #ff0000' :  '0.2px solid #aea9a9ff'};
    border-radius: 5px;
    padding: 0.5rem 1rem;
    margin: 10px;
`

export const Error = styled.span`
    color: #ff0000;
    font-size: 0.8rem;
    display: block;
`