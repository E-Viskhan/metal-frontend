import { Box, Button, Heading, Input, Stack } from "native-base";
import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useMutation } from "@apollo/client";
import { LOGIN } from "../../grapqlql/mutations";
import { useContext } from "react";
import { AuthContext } from "../../auth";

const Login = () => {
    const [loginMutation, { data, loading, error }] = useMutation(LOGIN);
    const { login } = useContext(AuthContext);

    const initialValues = { email: '', password: '' };

    const onSubmit = async ({ email, password }, actions) => {
        await loginMutation({ variables: { email, password } });

        const { accessToken, userId } = data.login;

        login(accessToken, userId);
        actions.resetForm();
    };

    const validationSchema = Yup.object({
        email: Yup.string().email(),
        password: Yup.string().required('Данное поле обязательно')
    });

    const formik = useFormik({ initialValues, onSubmit, validationSchema });

    return (
        <SafeAreaView style={styles.container}>
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
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 10,
        backgroundColor: 'white',
    },
});

export default Login;