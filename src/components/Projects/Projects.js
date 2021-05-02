import React from 'react';
import peace from '../../images/peace.PNG';
import gro from '../../images/gro.PNG';
import city from '../../images/city.PNG'; 
import Projectdetail from '../ProjectDetail/Projectdetail';

const Projects = () => {
    const projectData = [
        {
            title: 'Peace of life',
            pic: peace,
            live: 'https://interior-illusions-31e95.web.app/',
            code: 'https://github.com/Sumaiya176/Peace-of-Life-Client-Side'
        },
        {
            title: 'Grocery land',
            pic: gro,
            live: 'https://grocery-land-6de4c.web.app/',
            code: 'https://github.com/Sumaiya176/Grocery-land-client-side'
        },
        {
            title: 'City travel',
            pic: city,
            live: 'https://city-travels-e9873.web.app/',
            code: 'https://github.com/Sumaiya176/City-Travels-react'
        }
    ]

    const head ={
        color:'#1e847f', 
        paddingLeft:'40px'
    }
    return (
        <div className="">
            <h1 style={head}>MY Works</h1>
            <div className="mx-4 mt-5 row justify-content-center">
                {
                    projectData.map(data => <Projectdetail data={data}></Projectdetail>)
                }
            </div>

        </div>
    );
};

export default Projects;