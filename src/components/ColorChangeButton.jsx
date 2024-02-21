import React from "react";
import { useDispatch } from "react-redux"; 
import {colorChanger} from '../actions/index'

const ColorChangeButton = () => {

    const useDispatchs = useDispatch();

    return(
        <>
        <div className="main_contect">
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" onChange={() => useDispatchs(colorChanger("red"))} id="flexSwitchCheckDefault"/>
                <label className="form-check-label" for="flexSwitchCheckDefault">Change Nav Colors</label>
            </div>
        </div>    
        </>
    )
}
export default ColorChangeButton;