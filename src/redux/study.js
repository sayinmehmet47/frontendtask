import React, { Component } from 'react';
import { connect } from 'react-redux';

export class study extends Component {
  render() {
    return <div>study</div>;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(study);
