import React, {useState, useEffect} from "react";

function Planner(props){

    const [level, setLevel] = useState(55);
    const [activity, setActivity] = useState([
        {name:"cert-seal", charge:20, count:0},
        {name:"skill-chip", charge:20, count:0},
        {name:"w-engine", charge:20, count:0},
        {name:"h-d-d", charge:40, count:0},
        {name:"inv-log", charge:20, count:0},
        {name:"energy-module",charge:20, count:0},
        {name:"plating-agent",charge:20, count:0},
        {name:"denny",charge:20, count:0},
        {name:"disk",charge:60, count:0},
    ]);

    const [total,setTotal] = useState(0);
    const [certSeal, setCertSeal] = useState(0);
    const [skillChip, setSkillChip] = useState(0);
    const [wEngine, setWEngine] = useState(0);
    const [hdData, sethdData] = useState(0);
    const [invLog, setInvLog] = useState(0);
    const [energyModule, setEnergyModule] = useState(0);
    const [platingAgent, setPlatingAgent] = useState(0);
    const [denny, setDenny] = useState(0);
    const [disk, setDisk] = useState(0);

    useEffect(() => {
        var sum = 0;
        activity.forEach((activity) => {
            sum = sum + (activity.charge * activity.count);
        })
        setTotal(sum);
    },[activity]);

    useEffect(() => {
        props.onTotal(total);
    },[total]);

    function updateLevel(event){
        setLevel(parseInt(event.target.value));
    }

    useEffect(() => {
        props.onLevel(level);
    },[level]);

    useEffect(() =>{
        props.onActivity(activity);
    },[activity]);

    function addActivity(event){
        const allActivity = activity.map(activity => {
            if(activity.name === event.target.name){
                switch(event.target.name){
                    case "cert-seal":
                        setCertSeal(certSeal+1);
                        break;
                    case "skill-chip":
                        setSkillChip(skillChip+1);
                        break;
                    case "w-engine":
                        setWEngine(wEngine+1);
                        break;   
                    case "h-d-d":
                        sethdData(hdData+1);
                        break; 
                    case "inv-log":
                        setInvLog(invLog+1);
                        break;
                    case "energy-module":
                        setEnergyModule(energyModule+1);
                        break;
                    case "plating-agent":
                        setPlatingAgent(platingAgent+1);
                        break;
                    case "denny":
                        setDenny(denny+1);
                        break;
                    case "disk":
                        setDisk(disk+1);
                        break;
                }

                return{
                    ...activity,
                    count: activity.count + 1
                };
            }else{
                return activity;
            }
        });
        setActivity(allActivity);
    }

    function removeActivity(event){
        const allActivity = activity.map(activity => {
            if(activity.name === event.target.name){
                if(activity.count === 0){
                    return activity;
                }else{
                    switch(event.target.name){
                        case "cert-seal":
                            setCertSeal(certSeal-1);
                            break;
                        case "skill-chip":
                            setSkillChip(skillChip-1);
                            break;
                        case "w-engine":
                            setWEngine(wEngine-1);
                            break;    
                        case "h-d-d":
                            sethdData(hdData-1);
                            break;
                        case "inv-log":
                            setInvLog(invLog-1);
                            break;
                        case "energy-module":
                            setEnergyModule(energyModule-1);
                            break;    
                        case "plating-agent":
                            setPlatingAgent(platingAgent-1);
                            break; 
                        case "denny":
                            setDenny(denny-1);
                            break;
                        case "disk":
                            setDisk(disk-1);
                            break;
                    }
                    return{
                        ...activity,
                        count: activity.count - 1
                    };
                }

            }else{
                return activity;
            }
        });
        setActivity(allActivity);

    }



    return (
        <div className="grid-planner">
            <div className="planner-dropdown">
                <select onChange={updateLevel} defaultValue={55}>
                    <option value="55">Lv. 55</option>
                    <option value="50">Lv. 50</option>
                    <option value="45">Lv. 45</option>
                    <option value="40">Lv. 40</option>
                    <option value="35">Lv. 35</option>
                    <option value="30">Lv. 30</option>
                    <option value="25">Lv. 25</option>
                    <option value="20">Lv. 20</option>
                    <option value="10">Lv. 10</option>
                </select>
            </div>
            <div className="planner">
                <div className="component-div cert-seal">
                    <button name="cert-seal" onClick={removeActivity}>-</button>
                    <p>{certSeal}</p>
                    <button name="cert-seal" onClick={addActivity}>+</button>
                </div>
                <div className="component-div component">
                <button name="skill-chip" onClick={removeActivity}>-</button>
                    <p>{skillChip}</p>
                    <button name="skill-chip" onClick={addActivity}>+</button>
                </div>
                <div className="component-div chip">
                    <button name="w-engine" onClick={removeActivity}>-</button>
                    <p>{wEngine}</p>
                    <button name="w-engine" onClick={addActivity}>+</button>
                </div>
                {level >=25 && <div className="component-div h-d-d">
                    <button name="h-d-d" onClick={removeActivity}>-</button>
                    <p>{hdData}</p>
                    <button name="h-d-d" onClick={addActivity}>+</button>
                </div>}
                <div className="component-div inv-log">
                    <button name="inv-log" onClick={removeActivity}>-</button>
                    <p>{invLog}</p>
                    <button name="inv-log" onClick={addActivity}>+</button>
                </div>
                <div className="component-div energy-module">
                    <button name="energy-module" onClick={removeActivity}>-</button>
                    <p>{energyModule}</p>
                    <button name="energy-module" onClick={addActivity}>+</button>
                </div>
                <div className="component-div plating-agent">
                    <button name="plating-agent" onClick={removeActivity}>-</button>
                    <p>{platingAgent}</p>
                    <button name="plating-agent" onClick={addActivity}>+</button>
                </div>
                <div className="component-div denny">
                    <button name="denny" onClick={removeActivity}>-</button>
                    <p>{denny}</p>
                    <button name="denny" onClick={addActivity}>+</button>

                </div>
                <div className="component-div disk">
                    <button name="disk" onClick={removeActivity}>-</button>
                    <p>{disk}</p>
                    <button name="disk" onClick={addActivity}>+</button>
                </div>
            </div>
        </div>

        
    )
}

export default Planner;