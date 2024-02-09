import React from 'react'

import Movies from "@/mocks/movies.json"
import Genres from "@/mocks/genres.json"
import FeaturedMovie from "@/components/featured-movie"
import Categories from '@/components/categories'
import MoviesSection from '@/components/movies-section'

type HomeContainerType = {
    selectedCategory: {
        movies: any[]; // Değişiklik burada: movies dizisi için any kullanıldı, uygun türü belirtmek önemlidir
        id: number,
    }
}

const HomeContainer: React.FC<HomeContainerType> = ({ selectedCategory }) => {
    return (
        <div>
            <FeaturedMovie movie={Movies.results[1]} />
            <Categories categories={Genres.genres.slice(0, 5)} />
            {selectedCategory && selectedCategory.movies && selectedCategory.movies.length > 0 && (
                <MoviesSection title={Genres.genres.find((genre) => `${genre.id}` === selectedCategory.id.toString())?.name}
                    movies={selectedCategory.movies} />
            )}

            <MoviesSection title="Popular Films" movies={Movies.results.slice(1, 7)} />
            <MoviesSection title="Your Favorites" movies={Movies.results.slice(7, 13)} />
        </div>
    )
}

export default HomeContainer;