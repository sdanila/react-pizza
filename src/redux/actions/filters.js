import { SET_SORT_BY, SET_CATEGORY } from '.';

export const setSortBy = ({ type, order }) => ({
  type: SET_SORT_BY,
  payload: { type, order },
});

export const setCategory = (catIndex) => ({
  type: SET_CATEGORY,
  payload: catIndex,
});
