import {firestore} from '../src/firebase/'

import Wrapper from "../components/layout/Wrapper"
import Body from '../components/layout/Body'
import TopBar from '../components/layout/TopBar'
import EventCard from '../components/layout/EventCard'

const Events = () => {
    const [events, setEvents] = React.useState([])
    React.useEffect(()=>{
        console.log(process.env.FIREBASE_AUTH_DOMAIN)
        firestore.collection('events').get().then((data)=>{
            const event = []
            for(let documentos of data.docs){
                event.push(documentos.data())
            }
            setEvents(event)
        })
    }, [])
    return (
        <>
            <TopBar />
            <Body>
                <Wrapper>
                    <Wrapper.Title>Events</Wrapper.Title>
                    {/* <EventCard />
                    <EventCard /> */}
                    {events?.map((event, index) => {
                        return (<EventCard event={event} />)
                    })}
                </Wrapper>
            </Body>
        </>
    )
}

export default Events