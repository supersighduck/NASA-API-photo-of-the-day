// fetch().then().then().catch()

document.getElementById('buttonClick').addEventListener('click', grabDate)

function grabDate (){
    let userChoice = document.querySelector('input').value
    let url = `https://api.nasa.gov/planetary/apod?api_key=oKiYG4ZpxFcCwgKkHJDhgoBgqddFemXqcJtsjl2v&date=${userChoice}`
    // let url = 'https://api.nasa.gov/planetary/apod?api_key=oKiYG4ZpxFcCwgKkHJDhgoBgqddFemXqcJtsjl2v&date=' + userChoice
    fetch(url)
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        if(data.media_type === "image"){
            document.getElementById('nasaImage').src = data.hdurl
        }else if (data.media_type === "video"){
            document.querySelector('iframe').src = data.url
        }
        document.getElementById('nasaInfo').innerText = data.explanation
        document.getElementById('nasaTitle').innerText = data.title
    })
.catch(err => console.log(err))
}

