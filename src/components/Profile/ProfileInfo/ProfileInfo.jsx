import React from "react";
import styles from "./ProfileInfo.module.css";
import Loader from "../../common/Loader/Loader";
import ProfileStatus from "./ProfileStatus";



const ProfileInfo = (props) => {
    if (!props.profile) {
        return (
            <Loader/>
        )
    }
    return (
        <section>
            <div className={styles.profileWrapper}>
                <div>
                    <img src={props.profile.avatar} alt=""/>
                </div>
                <div className={styles.infoBlock}>
                    <div className={styles.nameBlock}>
                        <div className={styles.name}>{props.profile.first_name} {props.profile.last_name}</div>
                        <ProfileStatus updateProfileStatus={props.updateProfileStatus} status={props.profile.status}/>
                    </div>
                    <div className="">
                        <div>Обо мне: {props.profile.bio}</div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default ProfileInfo