import React from "react";
import styles from "./Loader.module.css";

let Loader = () => {
    return (
        <section>
            <div className={styles.loaderWrapper}>
                <div className={styles.ldsDualRing}/>
            </div>
        </section>
    )
};

export default Loader;