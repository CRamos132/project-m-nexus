import styled from 'styled-components'

const Card = styled.div`
    display: flex;
    flex-direction: row;
    width: 90%;
    min-width: 350px;
    margin: 16px;
    border: 1px solid ${props => props.theme.colors.primary};
    border-radius: 12px;
    min-height: 100px;
    overflow: hidden;
    transition: 0.3s;
    :hover {
        transform: scale(1.05);
    }
`

Card.Content = styled.div`
    margin-left: 16px;
    padding: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
    color: white;
    & > * {
        margin: 0;
    }
`

export default Card;