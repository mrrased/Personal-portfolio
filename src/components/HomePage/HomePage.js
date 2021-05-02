import React from 'react';
import Blog from '../Blog/Blog';
import ContactForm from '../ContactForm/ContactForm';
import Home from '../Home/Home';
import Projects from '../Projects/Projects';

const HomePage = () => {
    return (
        <div>
            <Home></Home>
            <Projects></Projects>
            <Blog></Blog>
            <ContactForm></ContactForm>
        </div>
    );
};

export default HomePage;