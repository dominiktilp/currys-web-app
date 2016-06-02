import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as AppActions from '../actions/appActions.js';


class Page extends React.Component {

  render() {
    const message = this.props.state.getIn(['app', 'lastPayment', 'state']) === 'OK' ?
      'Payment sucessful' : undefined
    ;

    return (
      <div>
        <h1>Currys web app</h1>
        <h3>{message}</h3>
        <Link to="/universe/0">Select Universe</Link>
      </div>
    );
  }
}

Page.propTypes = {
  actions: PropTypes.object.isRequired,
  state: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return { state }
  ;
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(AppActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
