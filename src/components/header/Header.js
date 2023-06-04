import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"
import logo from "./logo.png"
const Header = () => {
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img className="header__icon App-logo" src="https://th.bing.com/th/id/OIP.tYlfw7sl6psS-t-oJdltdgAAAA?pid=ImgDet&rs=1"  alt="Logo"/></Link>
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
            </div>
        </div>
    )
}

export default Header