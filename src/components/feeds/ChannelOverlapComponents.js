import React, { Component } from "react";
import { List, Icon, Image, Button } from 'semantic-ui-react'


class ChannelOverlap extends Component {
    render = () => {
        const newsItem = this.props.newsItem;
        return (
            <List.Item >
                <Icon name='bullhorn'/>
                <List.Content>
                    {newsItem.message}<br/>
                </List.Content>
            </List.Item>
        );
    }
}

export default ChannelOverlap;
