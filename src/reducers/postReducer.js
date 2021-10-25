// import {apiGetPost, AppClima, apiDeletePost, apiUpdatePost} from '../apis/config';

// const initialState = {posts: []};

// const GET_POSTS = 'GET_POSTS';
// const ADD_POST = 'ADD_POST';
// const UPDATE_POST = 'UPDATE_POST';
// const DELETE_POST = 'DELETE_POST';

// //actions
// const getPosts = (posts) => ({ type: GET_POSTS, payload: posts });
// const addPost = (post) => ({ type: ADD_POST, payload: post });
// const updatePost = (post) => ({ type: UPDATE_POST, payload: post });
// const deletePost = (id) => ({ type: DELETE_POST, payload: id });

// export const fetchGetPost = () => {
//     //redux-thunk nos permite mandar el dispatch como parámetro
//         return (dispatch) => {
//         //Llamamos a la función de la api
//             apiGetPost()
//                 .then(res => 
//     //al reolverse la petición de manera correcta desencadenamos la acción
//     // getPosts enviando los posts recibidos
//                     {dispatch(getPosts(res));})
//                 .catch(res => {console.log(res);})
//         }
//     };


//     export default (state = initialState, action) => {
//         switch (action.type) {
//           case GET_POSTS:
//             return { ...state, posts:action.payload };
//           case ADD_POST:
//             return {...state,
//               posts: [action.payload, ...state.posts]};
//           case UPDATE_POST:
//             return {...state,
//               posts: [...state.posts.map((post) => post.id === action.payload.id ?
//                      action.payload:post)]}
//           case DELETE_POST:
//             return {...state,
//               post: [...state.posts.filter(elem=>elem.id!==action.payload)]}
//           default:
//             return { ...state };}
//       }