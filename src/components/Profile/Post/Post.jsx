import styles from "./Post.module.css";
import React from "react";


const Post = (props) => {

    const date = new Date(props.post.created_date);
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const hours = date.getHours();
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = '0' + minutes
    }

    return (
        <section>
            <div className={styles.post} key={props.post.id}>
                <div>
                    <img src={props.profile.avatar} alt=""/>
                </div>
                <div className={styles.postContentBlock}>
                    <div className={styles.nameBlock}>
                        {props.authId === props.profile.id? <div onClick={() => (props.deletePost(props.post.id))} className={styles.delete}>x</div> : null}
                        <a href="#">{props.profile.first_name} {props.profile.last_name}</a>
                        <div className={styles.createdDate}>{day + '.' + month + '.' + year + ' ' + hours + ':' + minutes}</div>
                    </div>
                    <div className={styles.postText}>{props.post.text}</div>
                    <button disabled={props.likeInProgress} onClick={() => (props.like(props.post.id))} className={props.post.liked? styles.liked : styles.likes}>{props.post.total_likes}❤</button>
                </div>

            </div>
        </section>
    )
};

export default Post