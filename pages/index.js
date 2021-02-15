import TopBar from '../components/layout/TopBar'
import Wrapper from "../components/layout/Wrapper"
import Body from '../components/layout/Body'

export default function Home() {
  return (
    <>
      <TopBar />
      <Body>
          <Wrapper>
            <Wrapper.Title>Home</Wrapper.Title>
          </Wrapper>
      </Body>
    </>
  )
}
