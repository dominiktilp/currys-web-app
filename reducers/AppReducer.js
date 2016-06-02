import Immutable from 'immutable';
import * as types from '../constants/ActionTypes';


const initialState = Immutable.fromJS({
  universeId: null,
  categoryId: null
});

export default (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {

    case types.SET_UNIVERSE_ID:
      return state.merge({
        universeId: action.universeId,
        universe: undefined,
        categoryId: undefined,
        category: undefined,
        marketId: undefined,
        market: undefined,
        segmentId: undefined,
        segment: undefined,
        productId: undefined,
        product: undefined,
      });

    case types.LOADING_UNIVERSE_LIST:
      return state.merge({
        loading: true
      });

    case types.LOADED_UNIVERSE_LIST:
      return state.merge({
        loading: false,
        universeList: action.universeList
      });


    case types.LOADING_UNIVERSE_INFO:
      return state.merge({
        loading: true
      });

    case types.LOADED_UNIVERSE_INFO:
      console.log(action, action.type);
      return state.merge({
        loading: false,
        universe: action.universe
      });

    case types.SET_CATEGORY_ID:
      return state.merge({
        categoryId: action.universeId,
        category: undefined,
        marketId: undefined,
        market: undefined,
        segmentId: undefined,
        segment: undefined,
        productId: undefined,
        product: undefined,
      });

    case types.LOADING_CATEGORY_INFO:
      return state.merge({
        loading: true
      });

    case types.LOADED_CATEGORY_INFO:
      return state.merge({
        loading: false,
        category: action.category
      });

    case types.SET_MARKET_ID:
      return state.merge({
        marketId: action.marketId,
        market: undefined,
        segmentId: undefined,
        segment: undefined,
        productId: undefined,
        product: undefined,
      });

    case types.LOADING_MARKET_INFO:
      return state.merge({
        loading: true
      });

    case types.LOADED_MARKET_INFO:
      return state.merge({
        loading: false,
        market: action.market
      });

    case types.SET_SEGMENT_ID:
      return state.merge({
        segmentId: action.segmentId,
        segmen: undefined,
        productId: undefined,
        product: undefined,
      });

    case types.LOADING_SEGMENT_INFO:
      return state.merge({
        loading: true
      });

    case types.LOADED_SEGMENT_INFO:
      return state.merge({
        loading: false,
        segment: action.segment
      });

    case types.SET_PRODUCT_ID:
      return state.merge({
        productId: action.productId,
        product: undefined
      });

    case types.LOADING_PRODUCT_INFO:
      return state.merge({
        loading: true
      });

    case types.LOADED_PRODUCT_INFO:
      return state.merge({
        loading: false,
        product: action.product
      });

    default:
      return state;
  }
};
