import React, { Component } from "react";
import { List, Icon, Image } from 'semantic-ui-react'


class StatusTrend extends Component {
    render = () => {
        const newsItem = this.props.newsItem;
        return (
            <List.Item >
                {newsItem.thumbnail ? <Image avatar src={newsItem.thumbnail} /> : <Icon name='users'/>}
                <List.Content>
                    {newsItem.message}
                </List.Content>
            </List.Item>
        );
    }
}

export default StatusTrend;
