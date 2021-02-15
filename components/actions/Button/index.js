import styled from 'styled-components'

const Button = styled.button`
    padding: 8px 16px;
    border-radius: 12px;
    border: 1px solid ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primary};
    background-color: transparent;
    transition: 0.3s;
    :hover {
        color: ${props => props.theme.colors.mainBg};
        background-color: ${props => props.theme.colors.primary};
        cursor: pointer;
    }
`

export default Button