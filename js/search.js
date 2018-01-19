$(document).ready(() => {
    $('#searchForm').on('submit', (e) => {
        let searchText = $('#searchText').val();
        getMovies(searchText);
        e.preventDefault();
    });
    //Función para nav-side
    // Initialize collapse button
    $(".button-collapse").sideNav();
    // Initialize collapsible (uncomment the line below if you use the dropdown variation)
    //$('.collapsible').collapsible();

    $('.button-collapse').sideNav({
        menuWidth: 300, // Default is 300
        edge: 'right', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true,
    });
});

function getMovies(searchText) {
    axios.get('https://www.omdbapi.com/?apikey=924804a&s=' + searchText)
        .then((response) => {
            console.log(response);
            let movies = response.data.Search;
            let output = '';
            $.each(movies, (index, movie) => {
                output += `
                <div class="well col s6 m3">
                    <div class = "center-align">
                        <img src ="${movie.Poster}"/>
                        <div class="text-tittle">
                            <h6 class="white-text">${movie.Title}</h6>
                        </div>
                        <div class="details">
                            <a onclick ="movieSelected('${movie.imdbID}')" class = "waves-effect waves-light btn btn-color" href="#">Movie Details</a>
                        </div>
                    </div>
                </div>
                `;
            });

            $('#movies').html(output);
        })
        .catch((err) => {
            console.log(err);
        });
}

function movieSelected(id) {
    sessionStorage.setItem('movieId', id);
    window.location = 'movie.html';
    return false;
}

function getMovie() {
    let movieId = sessionStorage.getItem('movieId');

    axios.get('https://www.omdbapi.com/?apikey=3a181f1c&i=' + movieId)
        .then((response) => {
            console.log(response);
            let movie = response.data;

            let output = `
                <div class="view-movie black">
                <div class="row">
                <br><br>
                    <div class="col s12 m4 center">
                        <img src="${movie.Poster}" class="thumbnail">
                    </div>
                    <div class="col s12 m8 center white-text">
                        <h3>${movie.Title}</h3>
                        <ul class="list-group">
                        <li class="list-group-item"><strong>Genre:</strong> ${movie.Genre}</li>
                        <li class="list-group-item"><strong>Released:</strong> ${movie.Released}</li>
                        <li class="list-group-item"><strong>Rated:</strong> ${movie.Rated}</li>
                        <li class="list-group-item"><strong>IMDB Rating:</strong> ${movie.imdbRating}</li>
                        <li class="list-group-item"><strong>Director:</strong> ${movie.Director}</li>
                        <li class="list-group-item"><strong>Writer:</strong> ${movie.Writer}</li>
                        <li class="list-group-item"><strong>Actors:</strong> ${movie.Actors}</li>
                        </ul>
                        <div class="row">
                            <div class="well">
                                <h4>Plot</h4>
                                ${movie.Plot}
                                <hr>
                                <br><br>
                                <div class="buttons-movie center">
                                <a href="https://imdb.com/title/${movie.imdbID}" target="_blank" class="btn btn-primary active-color">View IMDB</a>
                                <a href="index.html" class="btn btn-default center active-color">Go Back To Search</a>
                            </div>
                            </div>
                        </div>
                    </div>
                    </div>
        `;

            $('#movie').html(output);
        })
        .catch((err) => {
            console.log(err);
        });
}
