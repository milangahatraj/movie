var xmlhttprequest = new XMLHttpRequest()
xmlhttprequest.responseType = 'json'
xmlhttprequest.open('get', 'https://api.themoviedb.org/3/movie/popular?api_key=03ad405b10696ec690e0466530f23c99&language=en-US&page=1')
xmlhttprequest.send()
var container = document.querySelector('.container')
var popUP = document.querySelector('.popUP')


milanA()
milanB()

let milanA = function() {
    console.log('hello milan')
}

function milanB() {
    console.log('hello milan')
}


xmlhttprequest.onload = function() {
    xmlhttprequest.response.results.forEach(movie => {
        var movieItem = document.createElement('div')
        movieItem.classList.add('item')




        var image = document.createElement('img')
        image.src = `http://image.tmdb.org/t/p/w185${movie.poster_path}`

        image.id = movie.id
        image.addEventListener('click', (event) => {
            popUP.style.display = 'block'
            modalBlock(movie)
        })
        movieItem.appendChild(image)

        var title = document.createElement('p')
        title.textContent = movie.title
        title.style.color = 'darkblue'
        movieItem.appendChild(title)


        container.appendChild(movieItem)



    });
}

function modalBlock(movie) {

    var modal = document.createElement('div')
    modal.classList.add('modal')

    var modalView = document.createElement('div')
    modalView.classList.add('modal-view')

    var content1 = document.createElement('div')
    content1.classList.add('content-img')
    var image = document.createElement('img')
    image.src = `http://image.tmdb.org/t/p/w185${movie.poster_path}`

    var span = document.createElement('span')
    span.classList.add('close')
    span.innerHTML = '&times;'
    span.addEventListener('click', function(e) {
        popUP.style.display = 'none'
    })

    var content2 = document.createElement('div')
    content2.classList.add('movie-title')

    var title = document.createElement('h3')
    title.textContent = movie.title


    var overview = document.createElement('p')
    overview.textContent = movie.overview

    popUP.appendChild(modal)

    modal.appendChild(modalView)

    modalView.appendChild(span)
    modalView.appendChild(content1)
    modalView.appendChild(content2)



    content1.appendChild(image)
    content2.appendChild(title)
    content2.appendChild(overview)



}