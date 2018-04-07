import axios from 'axios';
import { async } from 'async';
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
export const FETCH_POSTS = 'FETCH_POSTS';
export const SUBMIT_POST = 'SUBMIT_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';

const API_KEY = `?key=realmadridsr4`;
export function fetchPost(id){
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
  console.log(request);
  return {
    type: FETCH_POST,
    payload: request
  }
}

export async function deletePost(id,callback){
  const request = await axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);
  callback();
  return {
    type: DELETE_POST,
    payload: request
  }
}

export  async function submitPost(values,callback){
  const request = await axios.post(`${ROOT_URL}/posts${API_KEY}`,values)
  callback();
  return {
    type: SUBMIT_POST,
    payload: request
  }
}

export function fetchposts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return {
    type: FETCH_POSTS,
    payload: request
  }
}
