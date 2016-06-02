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
