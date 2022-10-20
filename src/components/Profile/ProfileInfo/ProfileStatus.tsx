import React from "react";
import s from "./ProfileInfo.module.css";

type ProfileStatusType = {
  status: any
  updateUserStatus: any
}

export class ProfileStatus extends React.Component<ProfileStatusType> {

  state = {
    editMode: false,
    status: this.props.status
  }

  activateEditMode = () => {
    this.setState({
      editMode: true
    })
  }
  deactivateEditMode = () => {
    this.setState({
      editMode: false
    })
    this.props.updateUserStatus(this.state.status);
  }
  onStatusChange = (e: any) => {
    this.setState({
      status: e.currentTarget.value
    });
  }

  render() {
    return (
      <div>
        {!this.state.editMode &&
          <div>
            <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
          </div>
        }
        {this.state.editMode &&
          <div>
            <input
              onChange={this.onStatusChange}
              autoFocus={true}
              onBlur={this.deactivateEditMode}
              value={this.state.status} />
          </div>
        }
      </div>
    );
  }
};
