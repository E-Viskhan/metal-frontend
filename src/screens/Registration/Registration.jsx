import { Box, Button, Heading, Input, Stack } from "native-base";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { CustomSafeArea } from "../../components";

export const Registration = () => {
    const initialValues = { email: '', password: '' };

    const onSubmit = (values, actions) => {
        console.log(values);
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
                <Heading textAlign='center' mb={3}>Зарегистрироваться</Heading>
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
                    <Button onPress={formik.handleSubmit}>Зарегистрироваться</Button>
                </Stack>
            </Box>
        </CustomSafeArea>
    )
};