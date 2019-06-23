import React, { Component } from "react";

import MilestoneSubComponent from './feeds/MilestoneSubComponent';
import StatusTrendComponent from './feeds/StatusTrendComponent';
import DeltaSubsComponent from './feeds/DeltaSubsComponent';
import VideoTopicsComponent from './feeds/VideoTopicsComponent';
import ChannelOverlapComponent from './feeds/ChannelOverlapComponent';
import ChannelNewComponent from './feeds/ChannelNewComponent'

class Feed extends Component {
    render = () => {
        const newsItem = this.props.newsItem;
        const type = newsItem.type;
        if(type === 'milestone-subs') {
            return (
                <MilestoneSubComponent 
                    newsItem={newsItem}
                    loadModal={this.props.loadModal}
                />
            );
        } else if(type === 'stats-trend') {
            return (
                <StatusTrendComponent
                    newsItem={newsItem}
                />
            )
        } else if(type === 'delta-subs') {
            return (
                <DeltaSubsComponent
                    newsItem={newsItem}
                />
            )
        } else if(type ==='video-topics') {
            return (
                <VideoTopicsComponent
                    newsItem={newsItem}
                />
            )
        } else if(type ==='channel-overlap') {
            return (
                <ChannelOverlapComponent
                    newsItem={newsItem}
                />
            )
        } else if(type ==='channel-new') {
            return (
                <ChannelNewComponent
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
