import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchNeeds } from '../utils/fetchComponentData';

import * as AppActions from '../actions/appActions.js';

import SelectCategory from '../components/SelectCategory.js';

const needs = [
  AppActions.setUniverseId
];

class CategoryList extends React.Component {

  constructor(params) {
    super(params);
    this.needs = needs;
  }

  componentDidMount() {
    if (!this.props.state.getIn(['app', 'universeId']) || !this.props.state.getIn(['app', 'universe'])) {
      fetchNeeds(this.needs, this.props);
    }
  }

  render() {
    return (
      <div>
        <h1>SelectCategory</h1>
        <Link to="/universe/0/category/0">Category 0</Link>

      </div>
    );
  }

}

CategoryList.propTypes = {
  actions: PropTypes.object.isRequired,
  state: PropTypes.object.isRequired
};

CategoryList.needs = needs;

function mapStateToProps(state) {
  return { state };
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
)(CategoryList);
