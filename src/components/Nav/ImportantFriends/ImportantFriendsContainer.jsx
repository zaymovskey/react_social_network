import ImportantFriends from "./ImportantFriends";
import {connect} from "react-redux";

let MapStateToProps = (state) => {
    return {
        importantFriends: state.nav.importantFriends
    }
};

const ImportantFriendsContainer = connect(MapStateToProps)(ImportantFriends);

export default ImportantFriendsContainer;