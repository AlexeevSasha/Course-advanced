export const BASE_URL = 'http://dev.trainee.dex-it.ru/'

interface IBaseRequestProps {
    url: string;
    method: string
    headers?: {
        "Content-Type"?: "application/json" | "multipart/form-data";
        Authorization?: string;
    },
    body?: string  ;
}

export const baseRequest = async ({ url, ...rest }: IBaseRequestProps) => {
    return await fetch(BASE_URL + url, { ...rest });
};
