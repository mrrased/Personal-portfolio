import React from 'react';
import Blog from '../Blog/Blog';
import ContactForm from '../ContactForm/ContactForm';
import Home from '../Home/Home';
import ProOne from '../ProOne/ProOne';

const HomePage = () => {
    return (
        <div>
            <Home></Home>
            <ProOne></ProOne>
            <Blog></Blog>
            <ContactForm></ContactForm>
        </div>
    );
};

export default HomePage;