export const BASE_URL = 'http://dev.trainee.dex-it.ru/'

interface IBaseRequestProps {
    url: string;
    method: "GET" | "POST" | "PUT" | "DELETE";
    headers?: {
        "Content-Type"?: "application/json" | "multipart/form-data";
        Authorization?: string;
    },
    body?: string;
    isAuth: boolean;
}

export const baseRequest = async ({ url, ...rest }: IBaseRequestProps) => {
    try {
        const user =  JSON.parse(`${localStorage.getItem("user")}`);
        const auth = rest.isAuth ? { Authorization: `Bearer ${user.token}`} : {};
        const response = await fetch(BASE_URL + url, { ...rest, headers: {...rest.headers, ...auth}});
        if (response.status === 401) {
            throw new Error('Wrong login or password')
        }
        if (response.status === 409) {
            throw new Error('User already registered')
        }
        if (!response.ok) {
            throw new Error(response.status.toString())
        }
        return response.json()
    } catch (e : any) {
        throw new Error(e.message);
    }
};
