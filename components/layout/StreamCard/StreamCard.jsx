import { useQuery } from 'react-query'
import getTwitchData from '../../../src/helpers/getStreamData'

const StreamCard = ({stream, token}) => {
    const { isLoading, error, data } = useQuery(stream, async ()=>{
        const res = await getTwitchData(stream, token).then(async response => {
            const data = await response
            console.log(data)
            return data
        })
        return await res
    }, {staleTime: 60 * 1000 * 5})
    return (
        <>
        {data && (
            <div>
                <h1>{data.display_name}</h1>
                {/* <h2>{data.title}</h2> */}
                {data.is_live ? (
                    <iframe
                        src={`https://player.twitch.tv/?${data.broadcaster_login}&parent=project-m-nexus.vercel.app`}
                        height="300"
                        width="400"
                        allowFullScreen={true}>
                    </iframe>
                ) : <p>Not live</p>}
            </div>
        )}
        </>
    )
}

export default StreamCard