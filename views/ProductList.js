import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchNeeds } from '../utils/fetchComponentData';

import * as AppActions from '../actions/appActions.js';

import SelectCategory from '../components/SelectCategory.js';

const needs = [
  AppActions.setUniverseId,
  AppActions.setCategoryId,
  AppActions.setSegmentId
];

class ProductList extends React.Component {

  constructor(params) {
    super(params);
    this.needs = needs;
    this.renderProduct = this.renderProduct.bind(this);
  }

  componentDidMount() {
    if (!this.props.state.getIn(['app', 'segmentId']) || !this.props.state.getIn(['app', 'segment'])) {
      fetchNeeds(this.needs, this.props);
    }    
  }

  renderProduct(product) {
    const universeId = this.props.state.getIn(['app', 'universeId']);
    const categoryId = this.props.state.getIn(['app', 'category', 'id']);
    const marketId = this.props.state.getIn(['app', 'market', 'id']);
    const segmentId = this.props.state.getIn(['app', 'segmentId']);
    return (
      <div className="productItem" key={product.id}>
        <div className="productItemImage">
          <img src={product.images[0]} />
        </div>
        <div className="productItemInfo">
          <h2 className="productName">{product.name}</h2>
          <div className="productId">{product.id}</div>
          <div className="productPrice">£{Math.round(product.price,2)}</div>
          <Link className="actionButton" to={"/universe/"+universeId+"/category/"+categoryId+"/market/"+marketId+"/segment/"+segmentId+"/product/"+product.id}>Tell me more</Link>
        </div>
      </div>
    );
  }

  render() {
    if (!this.props.state.getIn(['app', 'segmentId']) || !this.props.state.getIn(['app', 'products'])) {
      return (
        <div className="appLoader">
        ...loading...
        </div>
      );
    } else {
      const products = this.props.state.getIn(['app', 'products']).toJS();
      return (
        <div>
          {products.results.map(this.renderProduct)}
        </div>
      );
    }
  }

}

ProductList.propTypes = {
  actions: PropTypes.object.isRequired,
  state: PropTypes.object.isRequired
};

ProductList.needs = needs;

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
)(ProductList);
