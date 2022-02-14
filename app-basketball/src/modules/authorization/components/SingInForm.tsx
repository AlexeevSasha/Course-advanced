import React, { FC } from "react";
import { Input, Button } from "../../../common/components";
import {Container,  FormContainer, Title, Form, Text, TextLink} from './style'


export const SingInForm: FC = () => {
    return (
            <Container >
                <FormContainer >
                    <Title >Sign In</Title>
                    <Form >
                        <Input title={'Login'}/>
                        <Input title={'Password'} type="password"  />
                        <Button>Sign In</Button>
                    </Form>
                    <Text >
                        Not a member yet? <TextLink >Sign up</TextLink>
                    </Text>
                </FormContainer>
            </Container>
    )
}