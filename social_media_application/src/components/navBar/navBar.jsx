import React from "react";
import  { useContext } from "react";
import "./navBar.css";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";


const NavBar = () =>{
    const {currentUser} = useContext(AuthContext);
    return(
        <div className="navbar">
            <div className="navbarleft">
                <Link to="/" style={{textDecoration:"none"}}>
                <span className="navspan">MySocial</span>
                </Link>
                <HomeOutlinedIcon/>
                <WbSunnyOutlinedIcon/>
                <GridViewOutlinedIcon/>
                <div className="search">
                    <SearchOutlinedIcon/>
                    <input type="text" placeholder="Search" className="navinput"/>
                </div>
                
            </div>
            <div className="navbarright">
                <PersonOutlineOutlinedIcon/>
                <EmailOutlinedIcon/>
                <NotificationsOutlinedIcon/>
                <div className="navbaruser">
                <img src={currentUser.profilePic} alt="" className="navbarimg"/>
                    <span>{currentUser.name}</span>
                </div>
            </div>
        </div>
    )
}
export default NavBar