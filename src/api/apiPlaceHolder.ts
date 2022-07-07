import axios from 'axios';

export let instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    // withCredentials: true,
    // headers: {
    //     'API-KEY': ''
    // }
})


export const apiPlaceHolder = {
    get: () => {
        return instance.get<getPlaceHolderObjectType[]>('/posts')
    }
}

export type getPlaceHolderObjectType = {
    'userId': number
    'id': number
    'title': string
    'body': string
}