import React from "react";
import styles from "./styles.module.css";

type SkeletonType = {
    width: number,
    height: number
}

function Skeleton({ width, height }: SkeletonType) {
    return <div className={styles.skeleton} style={{ width, height }}></div>;
}

export default Skeleton;