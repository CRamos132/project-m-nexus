import Card from '../Card/index'
import Image from 'next/image'

const EventCard = ({event}) => {
 return (
    <Card>
        <Image 
            src='https://via.placeholder.com/150' 
            alt={`${event.name} event logo`}
            width={150}
            height={150} 
        />
        <Card.Content>
            <h2>{event.name}</h2>
            <p>{event.location} - {event.date}</p>
            <p>{event.url}</p>
            <p>{event.description}</p>
        </Card.Content>
    </Card>
 )
}

export default EventCard