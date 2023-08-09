import axios from "axios";
import {paths} from "../../../../generated/privateMessanger-api-types-v1";

const Host = "https://messenger-api.guzeevmd.ru"

type ValudUrl = keyof paths

export enum method{
    get = 'get',
    post = 'post',
    put = 'put',
    delete = 'delete'
}

export async function httpClient<TResponce>(
    method: method,
    url: ValudUrl,
    params?: object,
    data?: object
    ): Promise<TResponce>{

    const resultUrl = Host + url;
    switch (method){
        case 'get':
            return (await axios.get(resultUrl, { params } )).data
        case 'post':
            return (await axios.post(resultUrl, data)).data
        case 'put':
            return (await axios.put(resultUrl, data)).data
        case 'delete':
            return (await axios.delete(resultUrl, { params })).data
        default:
            return Promise.reject();
    }
}