import React, {FC, useState} from "react";
import { Input, Button, InputCheckbox } from "../../../common/components";
import {Container,  FormContainer, Title, Form, Text, TextLink} from './style'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import {IFormRegistration, RegistrationSchema} from "./schemaValidation";
import {signUp} from "../../../api/auth/authService";


export const SingUpForm: FC = () => {
    const [isChecked, setIsChecked] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<IFormRegistration>({
        resolver: yupResolver(RegistrationSchema)
    });
    const onSubmit = (data: IFormRegistration) => {
        const {login, userName, password} = data;
        signUp({login, userName, password})
    };
    return (
            <Container >
                <FormContainer >
                    <Title >Sign Up</Title>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Input id='nameUp' title={'Name'} {...register('userName')} error={errors.userName?.message} />
                        <Input  id='loginUp' title={'Login'} {...register('login')} error={errors.login?.message}/>
                        <Input id='passwordUp' title={'Password'} type="password" {...register('password')} error={errors.password?.message}/>
                        <Input id='passwAgain' title={'Enter your password again'} type="password" {...register('confirmPassword')} error={errors.confirmPassword?.message} />
                        <InputCheckbox value={isChecked} onChange={setIsChecked}/>
                        <Button disabled={!isChecked}>Sign Up</Button>
                    </Form>
                    <Text >
                        Already a member? <TextLink to='/login' >Sign In</TextLink>
                    </Text>
                </FormContainer>
            </Container>
    )
}