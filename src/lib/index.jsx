import _ from 'lodash';
import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.section`
  border-radius: 5px;
  background: #bbb;
  color: #402726;
`;

const List = styled.ul`
  color: #fff;
  padding: 5px;
`;

const Item = styled.li`
  display: ${ props => props.isShow ? 'block' : 'none' }
`;

class Newsticker extends Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  componentDidMount() {
    this.interval = setInterval(() => this._tick(), 3000);
  }

  _tick() {
    this.setState(prevState => ({
      seconds: prevState.seconds + 1
    }));
  }

  _renderNewsList() {
    const len = this.props.news.length;

    return _.map(this.props.news, (item, index) => {
      return (
        <Item
          key={ index }
          isShow={ this.state.seconds % len === index }
          >
          { item }
        </Item>
      );
    });
  }

  render() {
    return (
      <Container>
        <List>
          { this._renderNewsList() }
        </List>
      </Container>
    );
  }
}

export default Newsticker;