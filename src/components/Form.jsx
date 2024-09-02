import React, {useState, useEffect} from "react";
import Countdown from 'react-countdown';

function Form(props){

    const [charge, setCharge] = useState(0);
    var newCharge;

    function setNewCharge(event){
        newCharge = event.target.value;
    }

    function updateCharge(process){
        setCharge(newCharge);
        process.preventDefault();
    }

    return (
        <div className="div-container">
            <div className="div-header">Enter your current charge</div>
            <div className="div-content">
                <div className="first-container">
                    <div className="form-container">
                        <div>
                            <form action="submit">
                                <input placeholder="Charge" value={newCharge} onChange={setNewCharge}></input>
                                <button onClick={updateCharge}>Enter</button>
                            </form>
                        </div>
                        <div className="count-down">
                            <p>Full at:</p>
                            {(charge!=0 && charge<=240) && <p>{(new Date(Date.now() + (240-charge)* 6 * 60 *1000)).toLocaleString()}</p>}
                        </div>

                    </div>
                    <div className="current-container">
                        <p>Your current charge:</p>
                        <div>
                            <img className="battery-icon" src="./src/assets/images/battery-icon.png" alt="battery" />
                            {charge}/240
                        </div>

                    </div>
                    <div className="current-container">
                        <p>Your required charge:</p>
                        <div style={{ color: charge < props.totalCharge?"#ff0000":"#00ff00"}} >
                            <img className="battery-icon" src="./src/assets/images/battery-icon.png" alt="battery" />
                            {props.totalCharge}/240
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default Form;