import axios from "axios"

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "f2a61237-8cd9-408f-b899-774ac4c57f3f"
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
        const response = await instance.put('profile/status', {status});
        return response.data;
    }
}

export const headerAPI = {
    getHeader: async () => {
        const response = await instance.get(`auth/me`);
        return response.data;
    },
    login: async (email: any, password: any, rememberMe: any = false) => {
        const response = await instance.post(`auth/login`, { email, password, rememberMe});
        return response.data;
    },
    logout: async () => {
        const response = await instance.delete(`auth/login`);
        return response.data;
    }
}
