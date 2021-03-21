const getStreamData = async (stream, token) => {
    const data = {
      method: 'GET',
      headers: new Headers({
          'Content-Type': 'application/json',
          'client-id': process.env.NEXT_PUBLIC_TWITCH,
          Authorization: `Bearer ${token}`,
      }),
      cache: 'default',
    }
    return await fetch(`https://api.twitch.tv/helix/search/channels?query=${stream}`, data).then(async response => {
        const res = await response.json()
        //   console.log('data', res.data[0])
        return res.data[0]
    }).catch(error => console.log(error))

}

export default getStreamData