import React, { Component } from 'react';

const Footer = ()=>{

        /* Function to go to the top of the screen */
        const gotoTop = ()=>{
            window.scrollTo(0, 0)
        }
        return (
            <footer className="text-muted bg-dark">
                <div className="container">
                    <p className="float-right">
                        <button className="btn btn-light" onClick={gotoTop}>Go to top</button>
                    </p>
                    <p>Made by Aldebarán Canacasco</p>
                </div>
            </footer>
        );
    }

export default Footer;