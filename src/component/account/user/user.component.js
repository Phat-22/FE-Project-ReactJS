import React, { } from "react"
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './user.styles.css'
import { LogoutThunk } from "../../../redux/account-user/user.slice";

const UserComponent = ({ user }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    function menuToggle() {
        const toggleMenu = document.querySelector(".menu");
        toggleMenu.classList.toggle("active");
    }
    const logOut = () => {
        dispatch(LogoutThunk());
        alert('Log out success!!');
        navigate('/');
    }

    return (
        <div className="action" onClick={menuToggle}>
            <div className="profile">
                <img src="./assets/images/user.png" alt="" />
            </div>
            <div className="menu">
                <h3>{user?.username}</h3>
                <ul>
                    <li>
                        <img src="./assets/icon/user (1).png" alt="" /><Link href="#">My profile</Link>
                    </li>
                    <li>
                        <img src="./assets/icon/edit.png" alt="" /><Link href="#">Edit profile</Link>
                    </li>
                    <li>
                        <img src="./assets/icon/settings.png" alt="" /><Link href="#">Setting</Link>
                    </li>
                    <li>
                        <img src="./assets/icon/log-out.png" alt="" /><Link onClick={logOut}>Logout</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default UserComponent