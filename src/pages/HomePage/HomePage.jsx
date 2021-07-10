import React from 'react';
import './HomePage.css';
import Preview from '../../components/Preview/Preview';
import Carousel from '../../components/Carousel/Carousel';
import Divider from '../../components/Divider/Divider';
import Info from '../../components/Info/Info';

const HomePage = () => {
    return (
        <>
        <div className='welcome'>
            <p className="entry-text">Welcome!</p>
        </div>
        <div className='cartoon split'>
            <Preview title="Cartoons" poetry='false'/>
            <Divider />
            <Carousel />
        </div>
        <div className='poetry split'>
            <Carousel />
            <Divider />
            <Preview title="Poetry" poetry='true'/>
        </div>
        <div className='contact split'>
            <Preview title="Contact" poetry='false'/>
            <Divider />
            <Info />           
        </div>
        </>
    );
}

export default HomePage;
