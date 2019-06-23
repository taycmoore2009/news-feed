import React, { Component } from "react";
import { Image, List } from 'semantic-ui-react'


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
                        {newsItem.name}
                    </List.Header>
                    <List.Description>
                        Estimated Subs: {newsItem.est_subs}<br/>
                        {newsItem.message}
                    </List.Description>
                </List.Content>
            </List.Item>
        );
    }
}

export default Milestone;
