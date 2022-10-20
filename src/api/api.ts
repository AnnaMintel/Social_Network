import axios from "axios"

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "6f5a552c-78a0-45f5-a170-9dcb9cbea951"
    }
});

export const usersAPI = {
    getUsers: async (currentPage = 1, pageSize = 10) => {
        const response = await instance.get(`users?page=${currentPage}&count=${pageSize}`);
        return response.data;
    },
    follow: async (userID: number) => {
        const response = await instance.post(`follow/${userID}`);
        return response.data;
    },
    unfollow: async (userID: number) => {
        const response = await instance.delete(`follow/${userID}`);
        return response.data;
    }
}

export const headerAPI = {
    getHeader: async () => {
        const response = await instance.get(`auth/me`);
        return response.data;
    }
}

export const profileAPI = {
    getProfile: async (userId: number) => {
        const response = await instance.get(`profile/${userId}`);
        return response.data;
    },
    getStatus: async (userId: number) => {
        const response = await instance.get(`profile/status/${userId}`);
        return response.data;
    },
    updateStatus: async (status: string) => {
        const response = await instance.put('profile/status/', {status});
        return response.data;
    }
}

