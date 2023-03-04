import TimeOutPage from './TimeOutPage';
import React, { useEffect, useState } from 'react';
import LevelTwo1 from '../Components/leveltwo/leveltwo1'
import LevelTwo2 from '../Components/leveltwo/leveltwo2'
import LevelTwo3 from '../Components/leveltwo/leveltwo3'
import LevelTwo4 from '../Components/leveltwo/leveltwo4'
const LevelTwo = () => {
    const [selectedComponent, setSelectedComponent] = useState('LevelTwo1');
    const [timer, setTimer] = useState(60*25);
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(prevTimer => prevTimer - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    const renderComponent = () => {
        switch (selectedComponent) {
            case 'LevelTwo1':
                return <LevelTwo1 />;
            case 'LevelTwo2':
                return <LevelTwo2 />;
            case 'LevelTwo3':
                return <LevelTwo3 />;
            case 'LevelTwo4':
                return <LevelTwo4 />;
            default:
                return null;
        }
    }
    useEffect(() => {
        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

    const handleBeforeUnload = (event) => {
        event.preventDefault();
        event.returnValue = ''; // This is required to trigger the confirmation dialog
    }
    return (
        <div className="dashboard">
           {timer <= 0 ? <TimeOutPage />: <div className="dashboard-row">
                <div>
                    <div className="sidebar">
                        <ul className="sidebarlist">
                        <li className="row">
                                <div id="icon"><i className="fa-regular fa-clock"></i></div>{" "}
                                <div id="title">Timer : {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</div>
                            </li>
                            <hr/>
                            <li className="row" onClick={() => setSelectedComponent('LevelTwo1')}>
                                <div id="icon"><i className="fa-regular fa-pen-to-square"></i></div>{" "}
                                <div id="title">Level 1</div>
                            </li>
                            <li className="row" onClick={() => setSelectedComponent('LevelTwo2')}>
                                <div id="icon"><i className="fa-regular fa-pen-to-square"></i></div>{" "}
                                <div id="title">Level 2</div>
                            </li>
                            <li className="row" onClick={() => setSelectedComponent('LevelTwo3')}>
                                <div id="icon"><i className="fa-regular fa-pen-to-square"></i></div>{" "}
                                <div id="title">Level 3</div>
                            </li>
                            <li className="row" onClick={() => setSelectedComponent('LevelTwo4')}>
                                <div id="icon"><i className="fa-regular fa-pen-to-square"></i></div>{" "}
                                <div id="title">Level 4</div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    {renderComponent()}
                </div>
            </div>}
        </div>
    )
}

export default LevelTwo;



// USER
//  uname 
//  pwd 
// selected

//  Level1 Answers

//  dwa 
//  adwdwa 
//  dawwda 

//  Level2 ,2

//level 4,5
//only selected

// ADMIN 
// show finalists