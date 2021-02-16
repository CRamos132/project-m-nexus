import {firestore} from '../src/firebase/'

import Wrapper from "../components/layout/Wrapper"
import Body from '../components/layout/Body'
import TopBar from '../components/layout/TopBar'
import EventCard from '../components/layout/EventCard'
import SideBar from '../components/layout/SideBar'

const Events = ({events}) => {
    
    return (
        <>
            <TopBar />
            <Body>
                <Wrapper>
                    <Wrapper.Title>Events </Wrapper.Title>
                    {events?.map((event, index) => <EventCard key={`event_${index}`} event={event} />)}
                </Wrapper>
                <SideBar />
            </Body>
        </>
    )
}

export async function getStaticProps(context) {

    const data = await firestore.collection('events').get().then((data)=>{
        const event = []
        for(let documentos of data.docs){
            event.push(documentos.data())
        }
        return event
    })
    const time = 1 * 60 * 5;
  
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: {events: data},
      revalidate: time
    }
  }

export default Events