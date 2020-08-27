import React, { Component } from 'react';
import SearchIcon from './SearchIcon';

class TitleHeader extends Component {

    /* Functionality for the form search tag */
    searchRef = React.createRef();

    SearchPhoto = (e) => {
        e.preventDefault();
        this.props.tagSearched(this.searchRef.current.value);
    }

    render() {
        return (
            <section className="mainhead shadow p-3 mb-5 bg-white rounded">
                <div className="container">
                    <h1>Public Flikr feeds</h1>
                    <p className="lead text-muted">This React js webpage shows public feed from flikr, at the begining it brings any picture. Use the search box to bring images with relevant tags, if you want to lookf for more than one tag, use ',' comas to separete them</p>
                    <div id='form'>
                        <form className="form-row" onSubmit={this.SearchPhoto}>
                            <div className="col-10">
                                <input type="text" className="form-control mb-2 mr-sm-2" id="searchPhoto" placeholder="Search a photo" ref={this.searchRef}/>
                            </div>
                            <div className="col-2">
                                <button type="submit" className="btn btn-primary mb-2" ><SearchIcon /></button>
                            </div>
                        </form>

                    </div>
                </div>
            </section>
        );
    };
}

export default TitleHeader;