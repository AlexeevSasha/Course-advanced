import React, { FC } from "react";
import { Input, Button } from "../../../common/components";
import {Container,  FormContainer, Title, Form, Text, TextLink} from './style';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import {IFormLogin, LoginSchema} from "./schemaValidation";
import {signIn} from "../../../api/auth/authService";


export const SingInForm: FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormLogin>({
        resolver: yupResolver(LoginSchema)
    });
    const onSubmit = (data: IFormLogin) => {
        signIn(data)
    };
    return (
            <Container >
                <FormContainer >
                    <Title >Sign In</Title>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Input id='loginIn' title={'Login'}  {...register('login')} error={errors.login?.message}/>
                        <Input id='passwordIn' title={'Password'} type="password"  {...register('password')} error={errors.password?.message}/>
                        <Button>Sign In</Button>
                    </Form>
                    <Text >
                        Not a member yet? <TextLink to='/registration'>Sign up</TextLink>
                    </Text>
                </FormContainer>
            </Container>
    )
}