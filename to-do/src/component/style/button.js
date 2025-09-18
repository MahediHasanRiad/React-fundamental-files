import styled from "styled-components";

const bg = {
    update: '#00FF00',
    delete: '#ff0000'
} 

 const Button = styled.button`
    width: 50%;
    background: ${props => bg[props.bg] ?? '#1900ff95'};
    color: #efefef;
    border-radius: 5px;
    padding: 5px;
    cursor: pointer;
    margin-top: 10px;
`

export default Button