import React from "react";

const ColorChangeButton = () => {
    return(
        <>
        <div className="main_contect">
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" for="flexSwitchCheckDefault">Change Nav Colors</label>
            </div>
        </div>    
        </>
    )
}
export default ColorChangeButton;