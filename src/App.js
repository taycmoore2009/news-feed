import React, { Component } from "react";
import { Modal, Container, Header, List } from 'semantic-ui-react';

import FeedComponent from './components/FeedComponent';
import PopupModal from './components/ModalComponent';

import './App.css';

import newsFeed from './news.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      newsFeed: newsFeed,
      modalOpen: false,
      modalInfo: false
    };
  }

  generateNews = () => {
    var items = this.state.newsFeed.items.map((item, index) => {
      return item.entity_type === 'feed' ? <FeedComponent newsItem={item} loadModal={this.loadModal}/> : null;
    });
  return <List selection celled> {items} </List>;
  }
  
  loadModal = (feedInfo) => {
    this.setState({
      modalInfo: feedInfo,
      modalOpen: true
    })
  }

  closeModal = () => {
    this.setState({
      modalInfo: false,
      modalOpen: false
    })
  }

  render = () => {
    const latestNews = this.generateNews();
    const modalInfo = this.state.modalInfo;

    return (
      <div className="App">
        <Container>
          <Header size='huge'>Your News Feed</Header>
          {latestNews}
        </Container>
        {modalInfo ? <PopupModal data={modalInfo} closeModal={this.closeModal}/>: null}
      </div>
    );
  }
}

export default App;
