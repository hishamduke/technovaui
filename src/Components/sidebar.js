import React from 'react'
import { Sidebaritems } from './sidebaritems'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul className="sidebarlist">
                {Sidebaritems.map((val, key) => {
                    return <li key={key} className="row" id={window.location.pathname == val.link ? "active" : "" } onClick={() => { window.location.pathname = val.link }}>
                        <div id="icon">{val.icon}</div>{" "}
                        <div id="title">{val.title}</div>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Sidebar