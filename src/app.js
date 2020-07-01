import {
    http
} from './http';

//Get 
document.addEventListener("DOMContentLoaded", getPost)

function getPost() {
    http.get("http://localhost:3000/posts")
        .then(data => console.log(data))
        .catch(err => console.log(err))
}