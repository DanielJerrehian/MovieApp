const API_KEY = 'c8c440f86d54a1be2801aacd683cccf4'

let moviesAPI = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1`

let genresAPI = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`

let tvSeriesAPI = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&page=1&include_video=true`

let videoAPI = `https://api.themoviedb.org/3/movie/451048/videos?api_key=${API_KEY}`