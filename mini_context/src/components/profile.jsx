import { React } from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext.js"

function Profile() {
    const { user } = useContext(UserContext);
    if (!user) return <div>Plesed Login</div>
    return <div> Welcome to Login {user.username}</div>
}

export default Profile;
