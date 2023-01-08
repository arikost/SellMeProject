import axios from 'axios';

export function requestItems(){
    return axios.request({
        method: 'get',
        url : "http://www.mocky.io/v2/5e3940013200005e00ddf87e?mocky-delay=600ms"
    })
}