import React, { Component } from "react";
import { List, Icon, Image, Button } from 'semantic-ui-react'


class ChannelNew extends Component {
    render = () => {
        const newsItem = this.props.newsItem;
        return (
            <List.Item >
                {newsItem.thumbnail ? <Image avatar src={newsItem.thumbnail} /> : <Icon name='bullhorn'/>}
                <List.Content>
                    {newsItem.message}<br/>
                    {newsItem.link && `<a href='{newsItem.link}'>Click Here</a> for more info`}
                </List.Content>
            </List.Item>
        );
    }
}

export default ChannelNew;
