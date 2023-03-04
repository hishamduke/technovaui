import TimeOutPage from './TimeOutPage';
import React, { useEffect, useState } from 'react'
import LevelOne1 from '../Components/levelone/levelone1';
import LevelOne2 from '../Components/levelone/levelone2';
import LevelOne3 from '../Components/levelone/levelone3';
import LevelOne4 from '../Components/levelone/levelone4';
import LevelOne5 from '../Components/levelone/levelone5';

const LevelOne = () => {
    const [selectedComponent, setSelectedComponent] = useState('LevelOne1');
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
            case 'LevelOne1':
                return <LevelOne1 />;
            case 'LevelOne2':
                return <LevelOne2 />;
            case 'LevelOne3':
                return <LevelOne3 />;
            case 'LevelOne4':
                return <LevelOne4 />;
            case 'LevelOne5':
                return <LevelOne5 />;
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
                            <li className="row" onClick={() => setSelectedComponent('LevelOne1')}>
                                <div id="icon"><i className="fa-regular fa-pen-to-square"></i></div>{" "}
                                <div id="title">Level 1</div>
                            </li>
                            <li className="row" onClick={() => setSelectedComponent('LevelOne2')}>
                                <div id="icon"><i className="fa-regular fa-pen-to-square"></i></div>{" "}
                                <div id="title">Level 2</div>
                            </li>
                            <li className="row" onClick={() => setSelectedComponent('LevelOne3')}>
                                <div id="icon"><i className="fa-regular fa-pen-to-square"></i></div>{" "}
                                <div id="title">Level 3</div>
                            </li>
                            <li className="row" onClick={() => setSelectedComponent('LevelOne4')}>
                                <div id="icon"><i className="fa-regular fa-pen-to-square"></i></div>{" "}
                                <div id="title">Level 4</div>
                            </li>
                            <li className="row" onClick={() => setSelectedComponent('LevelOne5')}>
                                <div id="icon"><i className="fa-regular fa-pen-to-square"></i></div>{" "}
                                <div id="title">Level 5</div>
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

export default LevelOne;




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