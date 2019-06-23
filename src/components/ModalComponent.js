import React, { Component } from "react";
import { Modal, List, Header, Image, Icon, Container } from 'semantic-ui-react';


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
                <Container text>
                    <List relaxed='very' divided>
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
            </Modal>
        );
    }
}

export default PopupModal;
