$(document).ready(() => {
    $('#searchForm').on('submit', (e) => {
        let searchText = $('#searchText').val();
        getMovies(searchText);
        e.preventDefault();
    });
});

function getMovies (searchText) {
    axios.get('http://www.omdbapi.com/?apikey=924804a&s='+searchText)
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
                            <a onclick ="movieSelected('${movie.imdbID}')" class = "waves-effect waves-light btn" href="#">Movie Details</a>
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

        axios.get('http://www.omdbapi.com/?apikey=3a181f1c&i=' + movieId)
            .then((response) => {
                console.log(response);
                let movie = response.data;

                let output = `
            <div class="row">
            <div class="col-md-4">
                <img src="${movie.Poster}" class="thumbnail">
            </div>
            <div class="col-md-8">
                <h2>${movie.Title}</h2>
                <ul class="list-group">
                <li class="list-group-item"><strong>Genre:</strong> ${movie.Genre}</li>
                <li class="list-group-item"><strong>Released:</strong> ${movie.Released}</li>
                <li class="list-group-item"><strong>Rated:</strong> ${movie.Rated}</li>
                <li class="list-group-item"><strong>IMDB Rating:</strong> ${movie.imdbRating}</li>
                <li class="list-group-item"><strong>Director:</strong> ${movie.Director}</li>
                <li class="list-group-item"><strong>Writer:</strong> ${movie.Writer}</li>
                <li class="list-group-item"><strong>Actors:</strong> ${movie.Actors}</li>
                </ul>
            </div>
            </div>
            <div class="row">
            <div class="well">
                <h3>Plot</h3>
                ${movie.Plot}
                <hr>
                <a href="http://imdb.com/title/${movie.imdbID}" target="_blank" class="btn btn-primary">View IMDB</a>
                <a href="index.html" class="btn btn-default">Go Back To Search</a>
            </div>
            </div>
        `;

                $('#movie').html(output);
            })
            .catch((err) => {
                console.log(err);
            });
    }