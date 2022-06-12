import axios from "axios";

const initialState = {
  list: [],
};

const LOAD = "post/LOAD";
const ADD = "post/ADD";
const UPDATE = "post/UPDATE";
const DELETE = "post/DELETE";
const LOADONE = "post/LOADONE";

export function loadPost(post_list) {
  return { type: LOAD, post_list };
}

export function addPost(post) {
  return { type: ADD, post };
}

export function updatePost(post_index) {
  return { type: UPDATE, post_index };
}

export function deletePost(post_index) {
  return { type: DELETE, post_index };
}

export function loadOne(post_list) {
  return { type: LOADONE, post_list };
}

export const loadPostDB = () => {
  return function (dispatch) {
    axios({
      method: "get",
      url: "http://localhost:5001/post_data",
    }).then((response) => {
      console.log(response);
      dispatch(loadPost(response.data));
    });
  };
};

export const addPostDB = (post) => {
  console.log(post.title);
  return function (dispatch) {
    axios.post("http://localhost:5001/post_data", post).then((response) => {
      console.log(post);
      dispatch(addPost(post));
    });
  };
};

export const deletePostDB = (post_id) => {
  const numb = parseInt(post_id);
  console.log(numb);
  return function (dispatch) {
    axios
      .delete(`http://localhost:5001/post_data/${post_id}`, {})
      .then((response) => {
        dispatch(deletePost(post_id));
      });
  };
};

export const updatePostFB = (post_id) => {
  return async function (dispatch, getState) {
    dispatch(updatePost(post_id));
  };
};

export const loadOneDB = (post_id) => {
  return function (dispatch) {
    axios
      .get(`http://localhost:5001/post_data/${post_id}`, {})
      .then((response) => {
        dispatch(loadOne(response.data));
      });
  };
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "post/LOAD": {
      return { list: action.post_list };
    }
    case "post/ADD": {
      const new_post_list = [...state.list, action.post];
      return { list: new_post_list };
    }
    case "post/UPDATE": {
    }
    case "post/DELETE": {
      const new_post_list = state.list.filter((l, idx) => {
        return parseInt(action.post_index) !== idx;
      });
      return { list: new_post_list };
    }
    case "post/LOADONE": {
      return { list: action.post_list };
    }
    default:
      return state;
  }
}
