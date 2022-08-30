const ADD_USER = "add_user";
const UPDATE_USER = "update_user";
const DELETE_USER = "delete_user";
const SEARCH_USER = "search_user";


const ListUsers = JSON.parse(localStorage.getItem("listUser")) || [];

export { ADD_USER, UPDATE_USER, DELETE_USER, SEARCH_USER, ListUsers };
