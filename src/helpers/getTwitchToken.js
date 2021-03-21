const getAccess = () => {
    const data = {
        method: 'POST',
        cache: 'default',
        }
        return fetch(
        `https://id.twitch.tv/oauth2/token?client_id=${process.env.NEXT_PUBLIC_TWITCH}&client_secret=${process.env.NEXT_PUBLIC_TWITCH_SECRET}&grant_type=client_credentials`
        , data).then(async response => {
        const res = await response.json()
        return res
    }).catch(error => console.log(error))
}

export default getAccess