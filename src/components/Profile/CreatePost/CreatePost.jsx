import styles from "./CreatePost.module.css";
import React from "react";
import { Field, Form } from 'react-final-form'


const CreatePost = (props) => {
    return (
        <section>
            <div className='section-title'>Ваши посты</div>
            <div className={styles.postForm}>
                <CreatePostForm authId={props.authId} createPost={props.createPost}/>
            </div>
        </section>
    )
};
const CreatePostForm = (props) => {
    return (
        <Form
            onSubmit={(formObj) => {
                props.createPost(formObj.postText, props.authId)
            }}
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <Field name={"postText"} component="textarea" placeholder="Что нового?"/>
                    <button type='submit'>Опубликовать</button>
                </form>
            )}
        />
    )
};

export default CreatePost