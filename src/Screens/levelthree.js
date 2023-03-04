import LevelThree1 from '../Components/levelthree/levelthree1'
import LevelThree2 from '../Components/levelthree/levelthree2'
import LevelThree3 from '../Components/levelthree/levelthree3'
import TimeOutPage from './TimeOutPage';
import React, { useEffect, useState } from 'react';
const LevelThree = () => {
    const [selectedComponent, setSelectedComponent] = useState('LevelThree1');
    const [timer, setTimer] = useState(60*50);
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
            case 'LevelThree1':
                return <LevelThree1 />;
            case 'LevelThree2':
                return <LevelThree2 />;
            case 'LevelThree3':
                return <LevelThree3 />;
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
                            <li className="row" onClick={() => setSelectedComponent('LevelThree1')}>
                                <div id="icon"><i className="fa-regular fa-pen-to-square"></i></div>{" "}
                                <div id="title">Level 1</div>
                            </li>
                            <li className="row" onClick={() => setSelectedComponent('LevelThree2')}>
                                <div id="icon"><i className="fa-regular fa-pen-to-square"></i></div>{" "}
                                <div id="title">Level 2</div>
                            </li>
                            <li className="row" onClick={() => setSelectedComponent('LevelThree3')}>
                                <div id="icon"><i className="fa-regular fa-pen-to-square"></i></div>{" "}
                                <div id="title">Level 3</div>
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

export default LevelThree;



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