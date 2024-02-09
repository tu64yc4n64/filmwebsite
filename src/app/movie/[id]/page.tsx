import React from 'react'
import MovieContainer from "@/containers/movie"
import Movies from "@/mocks/movies.json"
import { notFound } from 'next/navigation'

type PropsType = {
    params: {
        category?: number[],
        id: string
    }
    searchParams: {
        error: string,
    }
}

const MoviePage: React.FC<PropsType> = ({ params, searchParams }) => {

    const movieDetail = Movies.results.find((movie) => movie.id.toString() === params.id)
    if (!movieDetail) {
        notFound();
    }
    if (searchParams.error === "true") {
        throw new Error("Error happened");
    }
    return (
        <div>
            <MovieContainer movie={movieDetail} />
        </div>
    )
}

export default MoviePage
