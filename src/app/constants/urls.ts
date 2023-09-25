import { environment } from "src/environments/environment";

export enum ApiURL{
    //baseURL = 'http://localhost:8080/',

    signup = 'http://localhost:8080/user/registration',
    
    login = 'http://localhost:8080/user/login',

    post = 'http://localhost:8080/post',

    //createPost = 'http://localhost:8080/post/create',

    getOnePost = 'http://localhost:8080/post/get-a-post/',
}
