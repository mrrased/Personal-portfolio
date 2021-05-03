import React from 'react';
import './Skill.css';

const Skill = () => {
    return (
        <div>
            <div className="selector">
                <ul>
                    <li>
                        <input type="checkbox" id="c1"/>
                        <label htmlFor="c1">ReactJs</label>
                    </li>
                    <li>
                        <input type="checkbox" id="c2"/>
                        <label htmlFor="c2">ReactJs</label>
                    </li>
                    <li>
                        <input type="checkbox" id="c3"/>
                        <label htmlFor="c3">ReactJs</label>
                    </li>
                    <li>
                        <input type="checkbox" id="c4"/>
                        <label htmlFor="c4">ReactJs</label>
                    </li>
                    <li>
                        <input type="checkbox" id="c5"/>
                        <label htmlFor="c5">ReactJs</label>
                    </li>
                    <li>
                        <input type="checkbox" id="c6"/>
                        <label htmlFor="c6">ReactJs</label>
                    </li>
                    <li>
                        <input type="checkbox" id="c7"/>
                        <label htmlFor="c7">ReactJs</label>
                    </li>
                    <li>
                        <input type="checkbox" id="c8"/>
                        <label htmlFor="c8">ReactJs</label>
                    </li>
                </ul>
                <button className="skill-btn">MERN</button>
                
            </div>
        </div>
    );
};

export default Skill;