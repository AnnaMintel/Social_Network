import React, { useEffect, useState } from "react";

type ProfileStatusType = {
  status: string
  updateUserStatus: any
}

export const ProfileStatusWithHooks = (props: ProfileStatusType) => {

  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect( () => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  }

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateUserStatus(status);
  }

  const onStatusChange = (e: any) => {
    setStatus(e.currentTarget.value);
  }

  return (
    <div>
      {!editMode &&
        <div>
          <span onDoubleClick={activateEditMode}>{status || '-------------'}</span>
        </div>
      }
      {editMode &&
        <div>
          <input
            autoFocus={true}
            onBlur={deactivateEditMode}
            value={status}
            onChange={onStatusChange}
          />
        </div>
      }
      {/* <div><button onClick={activateEditMode}>change status</button></div> */}
    </div>
  );
};
