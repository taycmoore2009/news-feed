import React, { Component } from "react";
import { List, Icon } from 'semantic-ui-react'


class StatusTrend extends Component {
    render = () => {
        const newsItem = this.props.newsItem;
        return (
            <List.Item >
                <Icon name='bullhorn'/>
                <List.Content>
                    {newsItem.message}
                </List.Content>
            </List.Item>
        );
    }
}

export default StatusTrend;
