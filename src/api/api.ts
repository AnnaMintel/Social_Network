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
        const response = await instance.put('profile/status', { status });
        return response.data;
    },
    savePhoto: async (photoFile: any) => {
        let formData = new FormData();
        formData.append('image', photoFile)
        const response = await instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        return response.data;
    }
}


export enum ResultCodeEnum {
    Success = 0,
    Error = 1
    // CaptchaIsRequired = 10
}

type GetHeaderResponseType = {
    data: { id: number, email: string, login: string }
    resultCode: ResultCodeEnum
    messages: Array<string>
}

type LoginResponseType = {
    data: { userId: number }
    resultCode: ResultCodeEnum
    messages: Array<string>
}

type LogoutResponseType = {
    data: {}
    resultCode: ResultCodeEnum
    messages: Array<string>
}

export const headerAPI = {
    getHeader: async () => {
       return await instance.get<GetHeaderResponseType>(`auth/me`).then (response => response.data);
    },
    login: async (email: string, password: string, rememberMe: boolean = false) => {
        return  await instance.post<LoginResponseType>(`auth/login`, { email, password, rememberMe })
        .then (response => response.data);
    },
    logout: async () => {
        return await instance.delete<LogoutResponseType>(`auth/login`).then (response => response.data);
    }
}

