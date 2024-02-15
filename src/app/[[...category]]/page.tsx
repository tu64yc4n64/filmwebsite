import React from 'react';
import HomeContainer from "@/containers/home";
import Movies from "@/mocks/movies.json";

type Params = {

    params: {
        category?: number[];

    };
};

const HomePage: React.FC<Params> = ({ params }) => {
    console.log(process.env.API_KEY)
    const movies = params?.category?.length ? Movies?.results?.slice(0, 7) : []

    return (
        <>
            <HomeContainer selectedCategory={{
                id: params.category?.[0] ?? 0,
                movies
            }} />
        </>
    );
}

export default HomePage;
