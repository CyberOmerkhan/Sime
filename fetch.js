const url = `https://apis.scrimba.com/bored/api/activity`

fetch(url).then((response) => {
    if(!response.ok)
        throw new Error(`Error Code is ${response.status_code}`)
    return response.json()
}).then((data) => {
    console.log(data.response)
})

