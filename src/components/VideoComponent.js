import React, { Component } from "react";
import { Container, Header } from 'semantic-ui-react';
import TrendingVideoComponent from './videos/TrendingVideoComponent';

class Feed extends Component {
    render = () => {
        const newsItem = this.props.newsItem;
        const type = newsItem.type;
        if(type === 'trending-video') {
            return (
                <TrendingVideoComponent
                    newsItem={newsItem}
                    loadModal={this.props.loadModal}
                />
            )
        }
        return (
            <div className="App">
            </div>
        );
    }
}

export default Feed;
