import React from "react";
import styles from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";



const ProfileInfo = (props) => {
    return (
        <section>
            <div className={styles.profileWrapper}>
                <div>
                    <img src={props.profile.avatar} alt=""/>
                    {/*{props.isOwner? <label><input type={'file'} accept="image/x-png,image/gif,image/jpeg"/></label> : null}*/}
                </div>
                <div className={styles.infoBlock}>
                    <div className={styles.nameBlock}>
                        <div className={styles.name}>{props.profile.first_name} {props.profile.last_name}</div>
                        <ProfileStatus isOwner={props.isOwner}
                                       authId={props.authId}
                                       profileId={props.profile.id}
                                       updateProfileStatus={props.updateProfileStatus}
                                       status={props.profile.status}/>
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