import React, { Component } from "react";
import { Container, Header, List } from 'semantic-ui-react';

import FeedComponent from './components/FeedComponent';
import VideoComponent from './components/VideoComponent';
import GenericItemComponent from './components/GenericItemComponent';
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
      if(item.entity_type === 'feed') {
        return <FeedComponent key={index} newsItem={item} loadModal={this.loadModal}/>;
      } else if(item.entity_type === 'video') {
        return <VideoComponent key={index} newsItem={item} loadModal={this.loadModal} />;
      } else {
        return <GenericItemComponent key={index} newsItem={item}/>
      }
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
