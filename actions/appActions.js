import * as types from '../constants/ActionTypes.js';

export function setUniverseId({ universeId }) {
  return (dispatch) => {

    dispatch({
      type: types.SET_UNIVERSE_ID,
      universeId
    });

    return dispatch(loadUniverseInfo({ universeId }));
  };
}

export function loadUniverseInfo({ universeId }) {
  return (dispatch) => {

    dispatch({
      type: types.LOADING_UNIVERSE_INFO
    });

    return fetch(`http://localhost:3000/api/universe/${universeId}`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        dispatch({
          type: types.LOADED_UNIVERSE_INFO,
          universe: json.universe
        });
      });

  };
}


export function setCategoryId({ categoryId }) {
  return (dispatch) => {

    dispatch({
      type: types.SET_CATEGORY_ID,
      categoryId
    });

    return dispatch(loadCategoryInfo({ categoryId }));
  };
}

export function loadCategoryInfo({ categoryId }) {
  return (dispatch) => {

    dispatch({
      type: types.LOADING_CATEGORY_INFO
    });

    return fetch(`http://localhost:3000/api/category/${categoryId}`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        dispatch({
          type: types.LOADED_CATEGORY_INFO,
          category: json.category
        });
      });

  };
}

export function setMarketId({ marketId }) {
  return (dispatch) => {

    dispatch({
      type: types.SET_MARKET_ID,
      marketId
    });

    return dispatch(loadMarketInfo({ marketId }));
  };
}

export function loadMarketInfo({ marketId }) {
  return (dispatch) => {

    dispatch({
      type: types.LOADING_MARKET_INFO
    });

    return fetch(`http://localhost:3000/api/market/${marketId}`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        dispatch({
          type: types.LOADED_MARKET_INFO,
          market: json.market
        });
      });

  };
}

export function setProductId({ productId }) {
  return (dispatch) => {

    dispatch({
      type: types.SET_PRODUCT_ID,
      productId
    });

    return dispatch(loadProductInfo({ productId }));
  };
}

export function loadProductInfo({ productId }) {
  return (dispatch) => {

    dispatch({
      type: types.LOADING_PRODUCT_INFO
    });

    return fetch(`http://localhost:3000/api/product/${productId}`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        dispatch({
          type: types.LOADED_PRODUCT_INFO,
          product: json.product
        });
      });

  };
}
