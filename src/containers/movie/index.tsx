import FeaturedMovie from "@/components/featured-movie";
import React from "react";

interface Movie {
    movie: {
        id: number;
        poster_path: string;
        title: string;
        overview: string;
    }

}

function MovieContainer({ movie }: Movie) {
    return <FeaturedMovie movie={movie} isCompact={false} />;
}

export default MovieContainer;