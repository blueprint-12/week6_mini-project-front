// user.js

// Actions
const LOAD = "user/LOAD";
const CREATE = "user/CREATE";
const UPDATE = "user/UPDATE";
const DELETE = "user/DELETE";

const initialState = {
  list: [
    {
      content: "테스트1",
      image_url:
        "https://www.comfortzone.com/-/media/Images/ComfortZone-NA/US/Blog/what-sounds-do-happy-cats-make.jpg?h=636&la=en&w=1000&hash=2F0BB9450E4AE626B574D3FF7EC54A51A4872C94",
    },
    {
      content: "테스트2",
      image_url:
        "https://www.comfortzone.com/-/media/Images/ComfortZone-NA/US/Blog/what-sounds-do-happy-cats-make.jpg?h=636&la=en&w=1000&hash=2F0BB9450E4AE626B574D3FF7EC54A51A4872C94",
    },
    {
      content: "테스트3",
      image_url:
        "https://www.comfortzone.com/-/media/Images/ComfortZone-NA/US/Blog/what-sounds-do-happy-cats-make.jpg?h=636&la=en&w=1000&hash=2F0BB9450E4AE626B574D3FF7EC54A51A4872C94",
    },
  ],
};

// Action Creators
export function loadPost() {
  return { type: LOAD };
}

export function createUser(new_user) {
  return { type: CREATE, new_user };
}

// export function updatePost(post) {
//   return { type: UPDATE, post };
// }

export function deletePost(user_index) {
  return { type: DELETE, user_index };
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "user/CREATE": {
      const new_users = [...state.users, action.new_user];
      return { users: new_users };
    }
    default:
      return state;
  }
}
