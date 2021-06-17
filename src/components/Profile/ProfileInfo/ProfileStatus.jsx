import React, {useEffect, useState} from "react";


const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

    const onStatusChange = (e) => {
        setStatus(e.target.value)
    };

    const activeEditMode = () => {
        setEditMode(true)
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateProfileStatus(status)
    };

    return (
        <div>
            {!editMode? <div onClick={props.authId === props.profileId? activeEditMode: null}>{status}</div> :
                <input onChange={onStatusChange}
                       onBlur={deactivateEditMode}
                       autoFocus={true}
                       value={status}
                       type="text"
                       placeholder={'Установить статус...'}/>}
        </div>
    )
};

export default ProfileStatus