import React, { Component } from "react";
import { List, Icon, Header, Image } from 'semantic-ui-react'


class StatusTrend extends Component {
    render = () => {
        const newsItem = this.props.newsItem;
        return (
            <List.Item >
                {newsItem.thumbnail ? <Image avatar src={newsItem.thumbnail} /> : <Icon name='users'/>}
                <List.Content>
                    <Header.Content>    
                        {newsItem.title}
                        <Header.Subheader>Subscriber Update!</Header.Subheader>
                    </Header.Content>
                    <List.Description>
                        New subscribers in the last 30 days<br/>
                        Current Subscribers: {newsItem.subscribers}<br/>
                        New Subscribers: {newsItem.subscribers_30_days}<br/>
                        {newsItem.message}
                    </List.Description>
                </List.Content>
            </List.Item>
        );
    }
}

export default StatusTrend;
