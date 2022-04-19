import React from 'react';
import '../css/Count.css'
const Count = () => {
    return (
        <div className='counter'>
            <div className='container'>
            <div class="counter__row">
                <div class="counter__col-3">
                   <div class="counter-content counter-mt-0">
                    <h1 class="counter-h1 counter-2">120</h1>
                    <h1 class="counter-p">Awesome Employees</h1>
                   </div>
                </div>
                <div class="counter__col-3">
                   <div class="counter-content">
                    <h1 class="counter-h1 counter-2">58</h1>
                    <h1 class="counter-p">Pizza Types</h1>
                   </div>
                </div>
                <div class="counter__col-3">
                   <div class="counter-content">
                    <h1 class="counter-h1 counter-2">14680</h1>
                    <h1 class="counter-p">Satisfied Clients</h1>
                   </div>
                </div>
                <div class="counter__col-3">
                   <div class="counter-content">
                    <h1 class="counter-h1 counter-2">2021</h1>
                    <h1 class="counter-p">Delivery</h1>
                   </div>
                </div>
            </div>
        
            </div>
        </div>
    );
}
export default Count;