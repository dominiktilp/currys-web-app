import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchNeeds } from '../utils/fetchComponentData';

import * as AppActions from '../actions/appActions.js';

const needs = [
  AppActions.setUniverseId,
  AppActions.setCategoryId,
  AppActions.setSegmentId,
  AppActions.setProductId
];

class Product extends React.Component {

  constructor(params) {
    super(params);
    this.needs = needs;
  }

  componentDidMount() {
    if (!this.props.state.getIn(['app', 'productId']) || !this.props.state.getIn(['app', 'product'])) {
      fetchNeeds(this.needs, this.props);
    }
  }

<<<<<<< Updated upstream
  render() {
    return (
      <div>
        <h2>Product page</h2>

      </div>
    );
=======
  rawDescription(description) {
    return { __html: description };
  }

  renderFeature(item) {
    return (
      <li>{item}</li>
    );
  }

  render() {
    if (!this.props.state.getIn(['app', 'product'])) {
      return (
        <div className="appLoader">
        ...loading...
        </div>
      );
    } else {
      const product = this.props.state.getIn(['app', 'product']).toJS();
      let paragraphs = product.description.split("<br /><br />");
      const firstParagraph = paragraphs.pop();
      const restDesc = paragraphs.join("<br /><br />");
      return (
        <div>
          <div className="productImage">
            <img src={product.images[0]} />
          </div>
          <div className="productInfo">
            <h1>{product.name}</h1>
            <div className="productId">
            {product.id}
            </div>
            <div className="productPrice">
            £{Math.round(product.price, 2)}
            </div>
          </div>
          <div className="productDescription firstParagraph" dangerouslySetInnerHTML={this.rawDescription(firstParagraph)}>
          </div>
          <div className="productFeatures">
            <ul>
              {product.features.map(this.renderFeature)}
            </ul>
          </div>
          <div className="productDescription" dangerouslySetInnerHTML={this.rawDescription(restDesc)}>
          </div>
        </div>
      );
    };
>>>>>>> Stashed changes
  }

}

Product.propTypes = {
  actions: PropTypes.object.isRequired,
  state: PropTypes.object.isRequired
};

Product.needs = needs;

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
)(Product);
