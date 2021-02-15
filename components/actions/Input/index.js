import styled from 'styled-components'

const Input = styled.input`
    padding: 8px;
    border: 1px solid ${props => props.theme.colors.primary};
    border-radius: 16px;
    width: 100%;
    font-size: 16px;
    /* ::-webkit-datetime-edit-text, 
    ::-webkit-datetime-edit-month-field, 
    ::-webkit-datetime-edit-day-field , 
    ::-webkit-datetime-edit-year-field{
        font-family: cursive;
        color: teal;
    } */
`

export default Input