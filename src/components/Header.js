import React, { Component } from 'react';
import CameraIcon from './CameraIcon';
import image from '../assets/images/aldeGif.png'

/* Header of the web pages */
class Header extends Component {
    render() {
        return (
            <header>
                <div className="collapse bg-dark" id="navbarHeader">
                    {/* An example of nav bar using bootstrap */}
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-8 col-md-7 py-4">
                                <div className="row">
                                    <div className="col-2">
                                        <p><img src={image} className="img-circle"/></p>
                                    </div>
                                    <div className="col-8">
                                        <h4 className="text-white">Made by José Aldebarán Canacasco</h4>
                                        <p className="text-muted">You may see the code in github in the link: Here</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 offset-md-1 py-4">
                                <h4 className="text-white">NPM installs needed</h4>
                                <ul className="list-unstyled">
                                    <li><a href="https://www.npmjs.com/package/bootstrap" target="blank" className="text-white">Bootstrap</a></li>
                                    <li><a href="https://www.npmjs.com/package/reactstrap" target="blank" className="text-white">Reactstrap</a></li>
                                    <li><a href="https://www.npmjs.com/package/jquery" target="blank" className="text-white">Bootstrap Jquey</a></li>
                                    <li><a href="https://www.npmjs.com/package/bootstrap-icons" target="blank" className="text-white">Bootstrap icons</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar navbar-dark bg-dark shadow-sm">
                    <div className="container d-flex justify-content-between">
                        <a href="#" className="navbar-brand d-flex align-items-center">
                            <CameraIcon/>
                            <strong>Flikr challenge</strong>
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </div>
            </header>
        );
    };
}

export default Header;