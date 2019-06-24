import React, { Component } from "react";
import { Image, List, Icon } from 'semantic-ui-react'


class Milestone extends Component {
    loadModal = () => {
        this.props.loadModal(this.props.newsItem);
    }

    render = () => {
        const newsItem = this.props.newsItem;
        return (
            <List.Item onClick={this.loadModal}>
                <Image avatar src={newsItem.thumbnail} />
                <List.Content>
                    <List.Header size='medium'>
                        {newsItem.channel_title}
                    </List.Header>
                    <List.Description>
                        {newsItem.title} is trending <Icon name='eye'/>
                    </List.Description>
                </List.Content>
                <List.Content floated='right'>
                    <Icon name='expand arrows alternate'/>
                </List.Content>
            </List.Item>
        );
    }
}

export default Milestone;
