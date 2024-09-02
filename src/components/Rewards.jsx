import React, {useState, useEffect} from "react";
import reward from "./RewardList.js"

var levelSelector=0;

function Rewards(props){

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

    const [level,setLevel] = useState(55);

    const [certSealCount, setCertSealCount] = useState(0);
    const [skillChipCount, setSkillChipCount] = useState(0);
    const [wEngineCount, setWEngineCount] = useState(0);
    const [hdDataCount, sethdDataCount] = useState(0);
    const [invLogCount, setInvLogCount] = useState(0);
    const [energyModuleCount, setEnergyModuleCount] = useState(0);
    const [platingAgentCount, setPlatingAgentCount] = useState(0);
    const [dennyCount, setDennyCount] = useState(0);
    const [diskCount, setDiskCount] = useState(0);

    useEffect(() => {

        setActivity(props.activity);
    },[props.activity]);

    useEffect(() => {

        setLevel(props.level);
    },[props.level]);

    useEffect(() => {
            setCertSealCount(activity[0].count);
            setWEngineCount(activity[1].count);
            setSkillChipCount(activity[2].count);
            sethdDataCount(activity[3].count);
            setInvLogCount(activity[4].count);
            setEnergyModuleCount(activity[5].count);
            setPlatingAgentCount(activity[6].count);
            setDennyCount(activity[7].count);
            setDiskCount(activity[8].count);
    },[activity]);

    useEffect(() => {
            console.log(level);
            switch(level){
                case 55: levelSelector = 0; break;
                case 50: levelSelector = 1; break;
                case 45: levelSelector = 2; break;
                case 40: levelSelector = 3; break;
                case 35: levelSelector = 4; break;
                case 30: levelSelector = 5; break;
                case 25: levelSelector = 6; break;
                case 20: levelSelector = 7; break;
                case 10: levelSelector = 8; break;
            }
    },[level]);

    return (
        <div className="div-container">
            <div className="div-header">Approx. Rewards</div>
                <div className="div-content align-rewards">
                    {certSealCount>0 &&
                    <div name="cert-seal" className="reward">
                        <div>
                            <img src="./src/assets/images/cert-seal-purple.png"></img>
                            <p>: {reward[levelSelector].certSealPDown * certSealCount}-{reward[levelSelector].certSealPUp * certSealCount}</p>
                        </div>
                        
                        <div>
                            <img src="./src/assets/images/cert-seal-blue.png"></img>
                            <p>: {reward[levelSelector].certSealBDown * certSealCount}-{reward[levelSelector].certSealBUp * certSealCount}</p>
                        </div>
                        <div>
                            <img src="./src/assets/images/cert-seal-green.png"></img>
                            <p>: {reward[levelSelector].certSealGDown * certSealCount}-{reward[levelSelector].certSealGUp * certSealCount}</p>
                        </div>
                    </div>}
                    {wEngineCount>0 &&
                    <div name="component" className="reward">
                        <div>
                            <img src="./src/assets/images/component-purple.png"></img>
                            <p>: {reward[levelSelector].wEnginePDown * wEngineCount}-{reward[levelSelector].wEnginePUp * wEngineCount}</p>
                        </div>
                        
                        <div>
                            <img src="./src/assets/images/component-blue.png"></img>
                            <p>: {reward[levelSelector].wEngineBDown * wEngineCount}-{reward[levelSelector].wEngineBUp * wEngineCount}</p>
                        </div>
                        <div>
                            <img src="./src/assets/images/component-green.png"></img>
                            <p>: {reward[levelSelector].wEngineGDown * wEngineCount}-{reward[levelSelector].wEngineGUp * wEngineCount}</p>
                        </div>
                    </div>}
                    {skillChipCount>0 &&
                    <div name="skill-chip" className="reward">
                        <div>
                            <img src="./src/assets/images/skill-chip-purple.png"></img>
                            <p>: {reward[levelSelector].skillChipPDown * skillChipCount}-{reward[levelSelector].skillChipPUp * skillChipCount}</p>
                        </div>
                        
                        <div>
                            <img src="./src/assets/images/skill-chip-blue.png"></img>
                            <p>: {reward[levelSelector].skillChipBDown * skillChipCount}-{reward[levelSelector].skillChipBUp * skillChipCount}</p>
                        </div>
                        <div>
                            <img src="./src/assets/images/skill-chip-green.png"></img>
                            <p>: {reward[levelSelector].skillChipGDown * skillChipCount}-{reward[levelSelector].skillChipGUp * skillChipCount}</p>
                        </div>
                    </div>}
                    {hdDataCount > 0 &&
                    <div name="h-d-d" className="reward">
                        <div>
                            <img src="./src/assets/images/higher-dimensional-data-purple.png"></img>
                            <p>: {reward[levelSelector].hdDataValue * hdDataCount}</p>
                        </div>
                    </div>}
                    {invLogCount > 0 &&
                    <div name="inv-log" className="reward">
                        <div>
                            <img src="./src/assets/images/inv-log-purple.png"></img>
                            <p>: {reward[levelSelector].invLogPDown * invLogCount}-{reward[levelSelector].invLogPUp * invLogCount}</p>
                        </div>
                        
                        <div>
                            <img src="./src/assets/images/inv-log-blue.png"></img>
                            <p>: {reward[levelSelector].invLogBDown * invLogCount}-{reward[levelSelector].invLogBUp * invLogCount}</p>
                        </div>
                        <div>
                            <img src="./src/assets/images/inv-log-green.png"></img>
                            <p>: {reward[levelSelector].invLogGDown * invLogCount}-{reward[levelSelector].invLogGUp * invLogCount}</p>
                        </div>
                    </div>}
                    {energyModuleCount > 0 &&
                    <div name="energy-module" className="reward">
                        <div>
                            <img src="./src/assets/images/energy-module-purple.png"></img>
                            <p>: {reward[levelSelector].energyModulePDown * energyModuleCount}-{reward[levelSelector].energyModulePUp * energyModuleCount}</p>
                        </div>
                        
                        <div>
                            <img src="./src/assets/images/energy-module-blue.png"></img>
                            <p>: {reward[levelSelector].energyModuleBDown * energyModuleCount}-{reward[levelSelector].energyModuleBUp * energyModuleCount}</p>
                        </div>
                        <div>
                            <img src="./src/assets/images/energy-module-green.png"></img>
                            <p>: {reward[levelSelector].energyModuleGDown * energyModuleCount}-{reward[levelSelector].energyModuleGUp * energyModuleCount}</p>
                        </div>
                    </div>}
                    {platingAgentCount >0 &&
                    <div name="plating-agent" className="reward">
                        <div>
                            <img src="./src/assets/images/plating-agent-purple.png"></img>
                            <p>: {reward[levelSelector].platingAgentPDown * platingAgentCount}-{reward[levelSelector].platingAgentPUp * platingAgentCount}</p>
                        </div>
                        
                        <div>
                            <img src="./src/assets/images/plating-agent-blue.png"></img>
                            <p>: {reward[levelSelector].platingAgentBDown * platingAgentCount}-{reward[levelSelector].platingAgentBUp * platingAgentCount}</p>
                        </div>
                        <div>
                            <img src="./src/assets/images/plating-agent-green.png"></img>
                            <p>: {reward[levelSelector].platingAgentGDown * platingAgentCount}-{reward[levelSelector].platingAgentGUp * platingAgentCount}</p>
                        </div>
                    </div>}
                    {dennyCount > 0 &&
                    <div name="denny" className="reward">
                        <div>
                            <img src="./src/assets/images/denny.png"></img>
                            <p>: {reward[levelSelector].dennys * dennyCount}</p>
                        </div>
                    </div>}
                </div>
        </div>
    )
}

export default Rewards;