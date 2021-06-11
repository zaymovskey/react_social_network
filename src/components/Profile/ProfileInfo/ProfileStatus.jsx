import React, {useState} from "react";


const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

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
            {!editMode? <div onClick={activeEditMode}>{status}</div> :
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