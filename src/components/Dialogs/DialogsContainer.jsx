import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {sendMessage, updateMessageBody} from "../../redux/dialogsReducer";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";

class DialogsContainer extends React.Component {
    render() {
        return <Dialogs {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    dialogsInfo: state.dialogsPage
});

export default compose(
    connect(mapStateToProps, {
        sendMessage,
        updateMessageBody
    }),
    withAuthRedirect
)(DialogsContainer);
