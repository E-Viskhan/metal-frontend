import { Box, Button, Heading, Input, Stack } from "native-base";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useMutation } from "@apollo/client";
import { LOGIN } from "../../grapqlql/mutations";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../components/AuthProvider";
import { CustomSafeArea } from "../../components";

export const Login = () => {
    const [login, { data: loginData, loading, error }] = useMutation(LOGIN);
    const { setAuthUser } = useContext(AuthContext);

    useEffect(() => {
        if (loginData) {
            const { accessToken, userId } = loginData.login;

            setAuthUser(accessToken, userId);
        }
    }, [loginData]);

    const initialValues = { email: '', password: '' };

    const onSubmit = async ({ email, password }, actions) => {
        await login({ variables: { email, password } });

        actions.resetForm();
    };

    const validationSchema = Yup.object({
        email: Yup.string().email(),
        password: Yup.string().required('Данное поле обязательно')
    });

    const formik = useFormik({ initialValues, onSubmit, validationSchema });

    return (
        <CustomSafeArea>
            <Box bg='white' flex={1} p={5}>
                <Heading textAlign='center' mb={3}>Войти в систему</Heading>
                <Stack space='3'>
                    <Input
                        value={formik.values.email}
                        onChangeText={formik.handleChange('email')}
                        onBlur={formik.handleBlur('email')}
                        placeholder='Введите электронную почту...'
                        keyboardType='email-address'
                    />
                    <Input
                        type='password'
                        value={formik.values.password}
                        onChangeText={formik.handleChange('password')}
                        onBlur={formik.handleBlur('password')}
                        placeholder='Введите пароль...'
                    />
                    <Button onPress={formik.handleSubmit}>Войти</Button>
                </Stack>
            </Box>
        </CustomSafeArea>
    )
};