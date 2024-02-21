import React from "react";
import { useSelector } from "react-redux"; 

const Nav = () => {
    const myState = useSelector((state) => state.changeTheNumber)
    return(
        <>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand " href="#"><h1>Total Amount Is <span class="badge bg-danger">{myState}</span></h1></a>
                </div>
            </nav>
        </>
    )
}

export default Nav;