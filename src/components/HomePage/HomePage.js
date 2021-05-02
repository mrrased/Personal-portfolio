import React from 'react';
import Blog from '../Blog/Blog';
import ContactForm from '../ContactForm/ContactForm';
import Home from '../Home/Home';
import Particle from '../Particle/Particle';
import Projects from '../Projects/Projects';

const HomePage = () => {
    return (
        <div>
            <Home></Home>
            <Projects></Projects>
            <Blog></Blog>
            <ContactForm></ContactForm>
            <Particle></Particle>
        </div>
    );
};

export default HomePage;