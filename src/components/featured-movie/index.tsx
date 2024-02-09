import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";

import styles from "./styles.module.css";

interface Movie {
    id: number;
    poster_path: string;
    title: string;
    overview: string;

}

interface FeaturedMovieProps {
    movie: Movie;
    isCompact?: boolean;
}

function FeaturedMovie({ movie, isCompact = true }: FeaturedMovieProps) {
    const { poster_path, title, overview } = movie;

    return (
        <div className={styles.movieWrapper}>
            <h1 className={styles.movieTitle}>{title}</h1>
            <p
                className={`${styles.overview} ${isCompact ? styles.shortOverview : ""
                    }`}
            >
                {overview}
            </p>
            <div className={styles.actionButtons}>
                <Link className={styles.playButton} href={`/movie/${movie.id}`}>
                    Play
                </Link>
                <button className={styles.addButton}>
                    <FaPlus />
                </button>
            </div>
            <div className={styles.moviePoster}>
                <div className={styles.moviePosterOverlay}></div>
                <Image
                    unoptimized
                    src={`https://image.tmdb.org/t/p/original${poster_path}`}
                    alt={title}
                    fill
                />
            </div>
        </div>
    );
}


export default FeaturedMovie;