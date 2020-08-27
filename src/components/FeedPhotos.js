import React, { Component } from 'react';
import CardPhoto from './CardPhoto';
import parse from 'html-react-parser';
import $ from 'jquery';
import TitleHeader from './TitleHeader';

class FeedPhotos extends Component {

    /* Set the state variable for posts */
    state = {
        feedPhotos: [
        ],
    }

    /* Function for search */
    tagSearched = (tags) => {
        const ApiUrl = 'https://api.flickr.com/services/feeds/photos_public.gne?lang=en-us&format=json&jsoncallback=?&tags='+tags+'&tagmode=all';
        this.showFeed(ApiUrl);
    }

    /* Get API and change state for posts */
    showFeed(url) {
        $.getJSON(url, (res) => {
            let photos = res.items.map(post => ({
                photoTitle: post.title,
                photoDescription: parse(post.description),
                photoTaken: Date(post.date_taken),
                photoTags: post.tags
            }));
            /*changing the state */
            this.setState({
                feedPhotos: photos
            })
        });
    }

    componentWillMount() {
        /* Before show component lets take the API info from All feeds.*/
        const ApiUrl = 'https://api.flickr.com/services/feeds/photos_public.gne?lang=en-us&format=json&jsoncallback=?';
        this.showFeed(ApiUrl);
    }

    render() {
        return (
            <React.Fragment>
                <TitleHeader tagSearched={this.tagSearched} />
                <div className="album py-5 bg-light">
                    <div className="container">
                        <div className="row">
                            {/* If there are images to show 'API brings json'*/}
                            {this.state.feedPhotos ?
                                (
                                    this.state.feedPhotos.map((el, i) => {
                                        return (
                                            <CardPhoto key={i} photo={el} />
                                        );
                                    })
                                )
                                /* Or else 'API does not send the json'*/
                                : (
                                    <p>There is no images</p>
                                )
                            }
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default FeedPhotos;