import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as AppActions from '../actions/appActions.js';
import { fetchNeeds } from '../utils/fetchComponentData';

const needs = [
  AppActions.loadUniverseList
];


class UniverseList extends React.Component {



  constructor(params) {
    super(params);
    this.needs = needs;
  }


  componentWillMount() {
    if (!this.props.state.getIn(['app', 'universeList'])) {
      fetchNeeds(this.needs, this.props);
    }
  }


  renderUniverse(universeData) {
    return(
      <div key={universeData.id} className="universe-select">
        <div className="text-wrapper">
          <Link to={"/universe/"+universeData.id}>{universeData.name}</Link>
        </div>
        <div className="caret">
          &gt;
        </div>
      </div>
    )
  }

  render() {
    const universeList = this.props.state.getIn(['app', 'universeList'])
    if (!universeList) {
      return <div>Loading...</div>
    }

    return (
      <div>
        {universeList.toJS().universe.map(this.renderUniverse)}
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
    dispatch,
    actions: bindActionCreators(AppActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UniverseList);
