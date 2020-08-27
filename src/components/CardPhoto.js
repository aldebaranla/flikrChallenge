import React, { Component } from 'react';
import CameraIcon from './CameraIcon';

class CardPhoto extends Component {

    render() {
        /* Load the information for each card photo */
        const {photoTitle, photoDescription, photoTaken, photoTags} = this.props.photo;
        var tags;

        /* Create an array of tags */
        if(photoTags){tags = photoTags.split(/(\s+)/).filter( (e)=> { return e.trim().length > 0; } );};

        return (
            <div className="col-md-12 col-lg-4">
                <div className="card mb-4 shadow-sm">
                    <div className="card-body">
                        {/*Photo title*/}
                        <h5 className="card-title">{photoTitle}</h5>
                        {/*Photo description*/}
                        <div className="card-text">{photoDescription}</div>
                        <div className="d-flex justify-content-between align-items-center">
                        {/*Photo taken date*/}
                        <small className="text-muted">
                        <CameraIcon/>
                            {Date(photoTaken)}</small>
                        </div>
                        <div>
                        {/* Tags */}
                        {photoTags ?
                            (
                                tags.map((el, i) => {
                                    return (
                                        <span className="badge badge-info tags" key={i}>{el}</span>
                                    );
                                })
                            )
                            /* Or else */
                            :(
                                <p className="noTags">without tags</p>
                            )
                        }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardPhoto;