import React from 'react';
import '../css/About.css';

const Menu = () => {
    return (
        <div className='about'> 
        <div className='container'>
            <div className='about__row'>
          
                <div className='about-col-2 Menu-2'>
                    <div className='about-right-img'>
                        <img src='/img/menu-left-img.jpg' />
                    </div>
                </div>
                <div className='about-col-1'>
                   <div className='about__left-content'>
                   <h2 className='about__h2'>The Pizza Menu</h2>
                    <h1 className='about__h1'>CHICAGO<br /> THIN CRUST</h1>
                    {/* <h1 className='about__h1 about-h1-mt'></h1> */}
                    <p className='about-p'>
                    Investigationes demonstraverunt lectores legere me lius
                    quod ii legunt saepius. Claritas est etiam processus dynaus,
                    quise sequitur mutationem consuetudium lectorum.
                    </p>
                    <div className='about__btn'>
                    <a href="#." className="banner-btn-a btn-smart">
                        View More
                    </a>
                    </div>
                   </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Menu;