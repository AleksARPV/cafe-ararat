import {$authHost, $host} from './index'

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const createGood = async (good) => {
    const {data} = await $authHost.post('api/goods', good)
    return data
}

export const fetchGoods = async () => {
    const {data} = await $host.get('api/goods')
    return data
}

export const deleteGood = async (id) => {
    const {data} = await $authHost.delete('api/goods/' + id)
    return data
}