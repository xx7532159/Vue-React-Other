import Immutable from 'immutable';
import {
    REQUEST_POSTS, RECEIVE_POSTS,
    RECORD_STATE, SAVE_PRODUCT_LIST, NEW_PRODUCT_DATA,
    DELETE_ITEM,
    GET_DATA_START, GET_DATA_SUCCESS, TEST_DISPATCH,
    UPDATE_SCH_DATA, UPDATE_DATE
} from '../Action/index';

// const initialState = Immutable.fromJS({}) //=Immutable.Map({})

const defaultlState = Immutable.fromJS({data: {}, isFetching: false});
// 首次渲染时获取数据
export const fetchData = (state = defaultlState, action = {}) => {
  switch(action.type) {
    case REQUEST_POSTS:
      return state.set('isFetching', true);
    case RECEIVE_POSTS:
      return Immutable.Map({'data': action.json, 'isFetching': false});// 返回一个新的state
    default:
      return state;
  }
};

// 手动获取数据
export const requestData = (state = {}, action = {}) => {
  switch(action.type) {
    case GET_DATA_START:
      return state;
    case GET_DATA_SUCCESS:
      action.success(action.json);
      state[action.name] = action.json;
      return state;
    default:
      return state;
  }
};

export const testData = (state = {}, action = {}) => {
  switch(action.type) {
    case TEST_DISPATCH:
      return Object.assign({}, state, action);
    default:
      return state;
  }
};

// 记录商品列表页数据状态
export const producRecord = (state = {}, action = {}) => {
  switch(action.type) {
    case RECORD_STATE:
      return Object.assign({}, state, action);
    case SAVE_PRODUCT_LIST:
      state['productList'] = [...action.productList];
      return state;       // 记录商品列表数据，但是不触发组件更新
    case NEW_PRODUCT_DATA:
      state['productData'] = [...action.productData];
      return state;
    default:
      return state;
  }
};

// 销售记录页面数据
export const saleRecord = (state = Immutable.fromJS({}), action = {}) => {
  switch(action.type) {
    case DELETE_ITEM:
      return Immutable.Map({index: action.index});
    default:
      return state;
  }
};

export const schData = (state = {}, action) => {
  switch(action.type) {
    case UPDATE_SCH_DATA:
      const data = action.schData;
      return {...data};
    default:
      return state;
  }
};

export const dateData = (state = {}, action) => {
  switch(action.type) {
    case UPDATE_DATE:
      const date = action.date;
      return new Date(date.getFullYear(), date.getMonth(), date.getDate());
    default:
      return state;
  }
};
