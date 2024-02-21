import React from "react";
import { useDispatch } from "react-redux";
import {incNumber, decNumber} from '../actions/index'

const Count = () => {
    const dispatch = useDispatch();
    return(
        <>
        <div className="main_contect">
            <div className="btn-group me-2" role="group" aria-label="Second group">
                <button type="button" className="btn btn-secondary" onClick={() => dispatch(decNumber(2))}>-</button>
                <button type="button" className="btn btn-dark">  </button>
                <button type="button" className="btn btn-secondary" onClick={() => dispatch(incNumber(2))}>+</button>
            </div>
        </div>
        </>
    )
}

export default Count;