import React, { useEffect, useState, useRef } from 'react';
import TableOfSubs from "./subs";
import {Row, Column} from "../components/layout.js";
import Page from '../components/page.js';
import {WEBSOCKET} from '../util';
import LiveTopics from './table.js';
import LivePublisher from './publisher.js';

class LiveDash extends React.Component {

  constructor() {
    super();
    this.state = {};
  }
  ws = new WebSocket(WEBSOCKET);

  componentDidMount(){
    this.ws.onopen = () => {
      console.log("websocket connected");
    }
    this.ws.onclose = () => {
      console.log("websocket closed");
    }
  }

  componentWillUnmount(){
    this.ws.close();
  }

  render(){
    return(
      <Page>
        <Column>
          <Row>
            <LiveTopics ws={this.ws}/>
          </Row>
          <Row className="top space">
            <Row>
              <Column> 
                <LivePublisher ws={this.ws}/>
                <p>Int Resolution: 1</p>
                <p>Float Resolution: 0.1</p>
                <a href="https://github.com/ec965/MCutie/blob/master/README.md#float-resolution-and-int-resolution">What's this?</a>
              </Column>
            </Row>
            <Column className="top">
              <TableOfSubs/>
            </Column>
          </Row>
        </Column>
      </Page>
    );
  }

}

export default LiveDash;