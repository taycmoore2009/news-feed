import React, { Component } from "react";
import { Modal, List, Header, Image, Icon, Container, Divider } from 'semantic-ui-react';


class PopupModal extends Component {
    render = () => {
        const data = this.props.data;
        return (
            <Modal open={true} onClose={this.props.closeModal}>
                <Header size='large'>
                    {data.thumbnail ? <Image avatar src={data.thumbnail} /> : <Icon name='users'/>}
                    <Header.Content>
                        {data.title}
                        {data.id && <Header.Subheader>${data.id}</Header.Subheader>}
                    </Header.Content>
                </Header>
                <Divider hidden/>
                <Container text>
                    <List relaxed='very' divided>
                        {data.channel_title && 
                            <List.Item>Author: {data.channel_title}</List.Item>
                        }
                        {data.subscribers && 
                            <List.Item>Estimated Subscribers: {data.subscribers}</List.Item>
                        }
                        {data.mod_7_days && 
                            <List.Item>7 Day change in Subscribers: {data.mod_7_days}</List.Item>
                        }
                        {data.mod_30_days && 
                            <List.Item>30 Day change in Subscribers: {data.mod_30_days}</List.Item>
                        }
                        {data.cms && 
                            <List.Item>CMS: {data.cms}</List.Item>
                        }
                        {data.domain && 
                            <List.Item>Domain: {data.domain}</List.Item>
                        }
                        {data.message && 
                            <List.Item>{data.message}</List.Item>
                        }
                    </List>
                </Container>
                <Divider hidden/>
            </Modal>
        );
    }
}

export default PopupModal;
