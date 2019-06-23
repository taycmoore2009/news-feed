import React, { Component } from "react";

import MilestoneSubComponent from './feeds/MilestoneSubComponent';
import StatusTrendComponent from './feeds/StatusTrendComponent';

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
        } else if(newsItem.type === 'stats-trend') {
            return (
                <StatusTrendComponent
                    newsItem={newsItem}
                />
            )
        } else {
            return (
                <div>
                    
                </div>
            )
        }
    }
}

export default Feed;
