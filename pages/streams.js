import {firestore} from '../src/firebase/'
import { useQuery } from 'react-query'

import Wrapper from "../components/layout/Wrapper"
import Body from '../components/layout/Body'
import TopBar from '../components/layout/TopBar'
import StreamCard from '../components/layout/StreamCard'

import getTwitchToken from '../src/helpers/getTwitchToken'

const Events = () => {
    const streams = ['sajam', 'projectmnexus']
    const { isLoading, error, data } = useQuery('streamToken', async () => {
        const data = await getTwitchToken()
        return data
    }, {staleTime: 60 * 1000 * 5}) // 5 minutes
    
    return (
        <>
            <TopBar />
            <Body>
                <Wrapper>
                    <Wrapper.Title>Streams </Wrapper.Title>
                    {data && streams.map((stream, index) => {
                        return <StreamCard stream={stream} token={data.access_token} key={`stream_${index}`} />
                    })}
                </Wrapper>
                {/* <SideBar /> */}
            </Body>
        </>
    )
}

// export async function getStaticProps(context) {

//     const data = await firestore.collection('events').get().then((data)=>{
//         const event = []
//         for(let documentos of data.docs){
//             event.push(documentos.data())
//         }
//         return event
//     })
//     const time = 1 * 60 * 5;
  
//     if (!data) {
//       return {
//         notFound: true,
//       }
//     }
  
//     return {
//       props: {events: data},
//       revalidate: time
//     }
//   }

export default Events