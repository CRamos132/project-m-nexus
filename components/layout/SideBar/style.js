import styled from 'styled-components'

const SideWrapper = styled.aside`
    position: absolute;
    right: 0;
    background: rgba(98,0,238, 0.2);
    border: 1px solid ${props => props.theme.colors.primary};
    border-right: none;
    border-bottom-left-radius: 12px;
    border-top-left-radius: 12px;
    height: 70vh;
    width: 15vw;
    @media (max-width: 700px){
        display: none;
    }
`

export {SideWrapper}