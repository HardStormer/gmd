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

    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;

    const resultUrl = Host + url;
    switch (method){
        case 'get':
            return (await axios.get(resultUrl, { params } )
                .then(response => {
                    return  response.data
                })
                .catch(function (error) {
                    if (error.response) {
                        console.error(error.response.data);
                        console.error(error.response.status);
                        console.error(error.response.headers);
                    } else if (error.request) {
                        console.log(error.request);
                    } else {
                        console.log('Error', error.message);
                    }
                    console.log(error.config);
                }
            ));
        case 'post':
            return (await axios.post(resultUrl, data)
                .then(response => {
                    return  response.data
                })
                .catch(function (error) {
                        if (error.response) {
                            console.error(error.response.data);
                            console.error(error.response.status);
                            console.error(error.response.headers);
                        } else if (error.request) {
                            console.log(error.request);
                        } else {
                            // Произошло что-то при настройке запроса, вызвавшее ошибку
                            console.log('Error', error.message);
                        }
                        console.log(error.config);
                    }
                ));
        case 'put':
            return (await axios.put(resultUrl, data)
                .then(response => {
                    return  response.data
                })
                .catch(function (error) {
                        if (error.response) {
                            console.error(error.response.data);
                            console.error(error.response.status);
                            console.error(error.response.headers);
                        } else if (error.request) {
                            console.log(error.request);
                        } else {
                            console.log('Error', error.message);
                        }
                        console.log(error.config);
                    }
                ));
        case 'delete':
            return (await axios.delete(resultUrl, { params })
                .then(response => {
                    return  response.data
                })
                .catch(function (error) {
                        if (error.response) {
                            console.error(error.response.data);
                            console.error(error.response.status);
                            console.error(error.response.headers);
                        } else if (error.request) {
                            console.log(error.request);
                        } else {
                            console.log('Error', error.message);
                        }
                        console.log(error.config);
                    }
                ));
        default:
            return Promise.reject();
    }
}