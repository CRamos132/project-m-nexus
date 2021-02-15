import styled from 'styled-components'

const Bar = styled.nav`
    height: 10vh;
    width: 100%;
    background-color: rgba(3, 218, 198, 0.2);
    border-bottom: 1px solid ${props => props.theme.colors.secondary};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

Bar.Section = styled.div`
    display: flex;
    flex-direction: row;
`

Bar.Item = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(3, 218, 198, 0.2);
    border: 1px solid ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.secondary};
    transition: 0.3s;
    height: 100%;
    width: 80px;
    font-size: 14px;
    font-weight: bold;
    a {
        color: ${props => props.theme.colors.secondary};
        text-decoration: none;
        margin: 5px;
    }
    :hover {
        background-color: ${props => props.theme.colors.secondary};
        a {
            color: white;
        }
    }
`

export {Bar}