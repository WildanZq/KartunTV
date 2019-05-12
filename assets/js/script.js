function toggleNav() {
    if ($('#sideNav').hasClass('active')) {
        $('#sideNav').removeClass('active');
    } else {
        $('#sideNav').addClass('active');
    }
}

function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

function generateStar(n) {
    let star = '', starCount = 5, fullStar = Math.floor(n);
    while (fullStar--) {
        star += '<i class="fas fa-star star"></i>';
        starCount--;
    }
    if (n % 1 > 0) {
        star += '<i class="fas fa-star-half-alt star"></i>';
        starCount--;
    }
    while (starCount--) {
        star += '<i class="far fa-star star"></i>';
    }
    return star;
}

function generateMovieList(movies, n) {
    let recommendedMovies = '';
    recommendedData = getRandom(movies, n);
    recommendedData.forEach(movie => {
        recommendedMovies += `
            <a href="#" class="item mb-3">
                <div class="bg-img" style="background-image: url(${movie.img})">
                    <div class="icon">
                        <i class="fas fa-star star"></i>
                        <small><b>${movie.rating}</b></small>
                    </div>
                </div>
                <h2 class="title mb-0 mt-2 text-truncate">${movie.title}</h2>
                <small class="date text-muted">${movie.date}</small>
            </a>
        `;
    });
    return recommendedMovies;
}
