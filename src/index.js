let poster1 = document.getElementById('poster')
let uiCards = document.getElementsByClassName('ui cards')
// let card = document.getElementsByClassName('card')
// let ttile = document.getElementById('title')
// let runTime = document.getElementById('runtime')
// let content = document.getElementsByClassName('content')
// let filmInfo = document.getElementById('film-info')
// let showTime = document.getElementById('showtime')
// let ticketNum = document.getElementById('ticket-num')


const request = async () => {
    let req = await fetch('http://localhost:3000/films')
    let res = await req.json()
    console.log('Response', res)
    res.forEach((element) => {
        let img = document.createElement('img')
        let title.innerText = element.title
        let runTime.innerText = element.runtime
        let content.innerText = element.content
        let filmInfo.innerText = element.filmInfo
        img.setAttribute = ('src', element.poster)
        poster1.appendChild(img)


        
    })
}
request()