import axios from "axios"

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "6f5a552c-78a0-45f5-a170-9dcb9cbea951"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    }
}

export const getUsers2 = (currentPage:number = 1, pageSize: number = 10) => {
    return instance.get(`follow?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            response.data
        })
}
