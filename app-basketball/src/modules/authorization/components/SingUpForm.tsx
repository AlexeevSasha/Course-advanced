import React, { FC } from "react";
import { Input, Button, InputCheckbox } from "../../../common/components";
import {Container,  FormContainer, Title, Form, Text, TextLink} from './style'


export const SingUpForm: FC = () => {
    return (
            <Container >
                <FormContainer >
                    <Title >Sign Up</Title>
                    <Form >
                        <Input title={'Name'}/>
                        <Input title={'Login'}/>
                        <Input title={'Password'} type="password"  />
                        <Input title={'Enter your password again'} type="password"  />
                        <InputCheckbox/>
                        <Button>Sign Up</Button>
                    </Form>
                    <Text >
                        Already a member? <TextLink >Sign In</TextLink>
                    </Text>
                </FormContainer>
            </Container>
    )
}