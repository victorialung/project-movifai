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

    function movieSelected(id){

    }
