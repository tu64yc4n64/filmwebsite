import React from 'react';
import HomeContainer from "@/containers/home";
import Movies from "@/mocks/movies.json";

type Params = {
    params: {
        category?: number[];
    };
    selectedCategory: {
        id: string,
        movies: []
    }
};

const HomePage: React.FC<Params> = ({ params }) => {
    let selectedKategori;

    if (params.category && params.category.length > 0) {
        selectedKategori = true;
    }

    return (
        <>
            <HomeContainer selectedCategory={{
                id: params.category?.[0] ?? 0,
                movies: selectedKategori ? Movies.results.slice(0, 7) : []
            }} />
        </>
    );
}

export default HomePage;
