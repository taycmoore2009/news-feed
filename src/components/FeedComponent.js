import React, { Component } from "react";

import MilestoneSubComponent from './feeds/MilestoneSubComponent';

class Feed extends Component {
    render = () => {
        const newsItem = this.props.newsItem;
        if(newsItem.type === 'milestone-subs') {
            return (
                <MilestoneSubComponent 
                    newsItem={newsItem}
                    loadModal={this.props.loadModal}
                />
            );
        } else {
            return (
                <div>
                    
                </div>
            )
        }
    }
}

export default Feed;
