import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as AppActions from '../actions/appActions.js';


class UniverseList extends React.Component {
  renderUniverse(universeData) {
    return(
      <div className="universe-select">
        <div className="text-wrapper">
          Kitchen appliances
        </div>
        <div className="caret">
          >
        </div>
      </div>
    )
  }

  render() {
    const message = this.props.state.getIn(['app', 'lastPayment', 'state']) === 'OK' ?
      'Payment sucessful' : undefined
    ;

    return (
      <div>
        {[1,2,3,4].map(this.renderUniverse)}
        <Link to="/universe/0">Universe 0</Link>
      </div>
    );
  }
}

UniverseList.propTypes = {
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
)(UniverseList);
