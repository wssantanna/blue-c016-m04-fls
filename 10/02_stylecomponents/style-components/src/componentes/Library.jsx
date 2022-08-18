import styled from 'styled-components';

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: ${props => props.theme == "black" ? "black" : "palevioletred"};

    strong {
        color: lightgreen;
    }
`;

export { Title };