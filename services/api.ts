export const TMDB_CONFIG = {
    BASE_URL: "https://api.themoviedb.org/3",
    API_KEY: process.env.EXPO_PUBLIC_TMDB_KEY,
    headers: {
        accept: 'application/json',
    }
}

export const fetchMovies = async({query}: {query: string}) => {
    const endpoint = query
    ? `${TMDB_CONFIG.BASE_URL}/search/movie?api_key=${TMDB_CONFIG.API_KEY}&query=${encodeURIComponent(query)}`
    : `${TMDB_CONFIG.BASE_URL}/discover/movie?api_key=${TMDB_CONFIG.API_KEY}&sort_by=popularity.desc`

    console.log('API Endpoint:', endpoint);
    console.log('API Key exists:', !!TMDB_CONFIG.API_KEY);

    const response = await fetch(endpoint, {
        method: 'GET',
        headers: TMDB_CONFIG.headers,
    })

    console.log('Response status:', response.status);

    if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`)
    }

    const data = await response.json()
    console.log('Data received:', data.results?.length, 'movies');

    return data.results
}

export const fetchMovieDetails = async(movieId: string): Promise<MovieDetails> => {
    try {
        const response = await fetch(`${TMDB_CONFIG.BASE_URL}/movie/${movieId}?api_key=${TMDB_CONFIG.API_KEY}`, {
            method: "GET",
            headers: TMDB_CONFIG.headers,
        })

        if (!response.ok) throw new Error('Failed to fetch movie details')

        const data = await response.json()

        return data

    } catch(error) {
        console.log(error)
        throw error
    }
}