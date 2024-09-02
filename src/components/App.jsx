import Footer from './Footer';
import Header from './Header';
import Form from './Form';
import Rewards from './Rewards';
import Planner from './Planner';
import { useState } from 'react';
import About from "./About";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {

  const [activity,setActivity] = useState([
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
  const [totalCharge, setTotalCharge] = useState();
  const [level, setLevel] = useState(50);

  function getTotal(total){
    setTotalCharge(total);
  }

  function getLevel(level){
    setLevel(level);
  }

  function getActivity(activity){
    setActivity(activity);
  }

  return (
    <Router>
      <div>
          <Header />
          <div className='base'>
            <Switch>
              <Route exact path="/">
                <Form totalCharge={totalCharge}/>
                <Planner onTotal={getTotal} onLevel={getLevel} onActivity={getActivity}/>
                <Rewards level={level} activity={activity}/>
              </Route>
              <Route exact path="/about">
                <About />
              </Route>

            </Switch>
          
          </div>

          <Footer />
      </div>
    </Router>
    

  );
}

export default App;
