import styled from 'styled-components'

const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15vh 5% 5%;
    background: rgba(98,0,238, 0.2);
    width: 50%;
    border: 1px solid ${props => props.theme.colors.primary};
    border-radius: 16px;
    overflow: hidden;
    margin-bottom: 30px;
`

Wrapper.Title = styled.h1`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    top: 0;
    margin: 0;
    width: 100%;
    background-color: ${props => props.theme.colors.primary};
    color: white;
    height: 10vh;
`

export default Wrapper