import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchNeeds } from '../utils/fetchComponentData';

import * as AppActions from '../actions/appActions.js';

import Breadcrumb from '../components/Breadcrumb.js';

const needs = [
  AppActions.loadUniverseList,
  AppActions.setUniverseId
];

class CategoryList extends React.Component {

  constructor(params) {
    super(params);
    this.needs = needs;
    this.renderCategories = this.renderCategories.bind(this);
  }

  componentDidMount() {
    if (!this.props.state.getIn(['app', 'universeId']) || !this.props.state.getIn(['app', 'universe'])) {
      fetchNeeds(this.needs, this.props);
    }
  }

  renderCategories(categoryData) {
    if (!this.props.state.getIn(['app', 'universeId'])) {
      return (
        <div className="appLoader">
        ...loading...
        </div>
      );
    } else {
      const universeId = this.props.state.getIn(['app', 'universeId']);
      return(
        <div key={categoryData.id} className="universe-select">
          <div className="text-wrapper">
            <Link to={"/universe/"+categoryData.parentId+"/category/"+categoryData.id}>{categoryData.name}</Link>
          </div>
          <div className="caret">
            &gt;
          </div>
        </div>
      )
    }
  }


  render() {
    const universeList = this.props.state.getIn(['app', 'universeList'])
    const universeId = this.props.params.universeId

    return (
      <div>
        <Breadcrumb previousStep='/' />
        {universeList.toJS().category[universeId].map(this.renderCategories)}
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
