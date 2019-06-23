import React, { Component } from "react";

import MilestoneSubComponent from './feeds/MilestoneSubComponent';
import StatusTrendComponent from './feeds/StatusTrendComponent';
import DeltaSubsComponent from './feeds/DeltaSubsComponent';
import VideoTopicsComponent from './feeds/VideoTopicsComponent';

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
        } else if(newsItem.type === 'delta-subs') {
            return (
                <DeltaSubsComponent
                    newsItem={newsItem}
                />
            )
        } else if(newsItem.type ==='video-topics') {
            return (
                <VideoTopicsComponent
                    newsItem={newsItem}
                />
            )
        } else {
            console.log(newsItem);
            return (
                <div></div>
            )
        }
    }
}

export default Feed;
