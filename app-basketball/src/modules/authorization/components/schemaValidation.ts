import * as yup from "yup";

export interface IFormLogin {
    login: string
    password: string
}
export interface IFormRegistration {
    userName: string,
    login: string,
    password: string,
    confirmPassword: string
}

export const LoginSchema = yup.object({
    login: yup.string().email('Неверная почта').required('E-mail обязателен'),
    password: yup.string().min(6, "Пароль не менее 6 символов").required('Пароль обязателен'),
}).required();

export const RegistrationSchema = yup.object({
    userName: yup.string().required('Обязателеное поле'),
    login: yup.string().email('Неверная почта').required('E-mail обязателен'),
    password: yup.string().min(6, "Пароль не менее 6 символов").required('Пароль обязателен'),
    confirmPassword: yup.string().required().oneOf([yup.ref("password")], "Пароли не совпадают").required('Пароль обязателен'),
}).required();