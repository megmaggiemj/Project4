import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';


function Home() {

    return(
        <div className='homepage'>
            <div className='container'>
                <h1>Would you like to play a game?</h1>
   
                <p className='homepage'>This will be the game intro</p>

                <Button variant="outline-secondary" className='toLevelOneButton'>
                    <Link to='/Level1' className='toLevelOne'>
                        I'll play along
                    </Link>
                </Button>{' '}

            </div> 
            <div className='footerHomePage'>
            </div>
        </div>
     ) 
}
export default Home