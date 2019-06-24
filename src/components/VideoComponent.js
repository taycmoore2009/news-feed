import React, { Component } from "react";
import { Container, Header } from 'semantic-ui-react';
import TrendingVideoComponent from './videos/TrendingVideoComponent';

class Feed extends Component {
    render = () => {
        const newsItem = this.props.newsItem;
        const type = newsItem.type;
        if(type === 'trending-video') {
            console.log('trending');
            return (
                <TrendingVideoComponent
                    newsItem={newsItem}
                    loadModal={this.props.loadModal}
                />
            )
        }
        return (
            <div className="App">
            <Container fluid>
            <Header size='medium'>Video Item</Header>
            </Container>
            </div>
        );
    }
}

export default Feed;
