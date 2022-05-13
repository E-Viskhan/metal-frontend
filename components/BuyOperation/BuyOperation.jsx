import { StyleSheet } from "react-native";
import { Box, Button, Input, Stack } from "native-base";
import { useContext } from "react";
import { NavigationContext } from "@react-navigation/native";
import * as Yup from 'yup';
import { useFormik } from "formik";

export default function BuyOperation() {
    const { goBack } = useContext(NavigationContext);

    const initialValues = { name: '', count: '', price: '', amount: '' };

    const onSubmit = (values, actions) => {
        console.log(values);
        actions.resetForm();
    };

    const validationSchema = Yup.object({
        name: Yup.string().required('Это поле обязательно'),
        count: Yup.string().required('Это поле обязательно'),
        price: Yup.string().required('Это поле обязательно'),
        amount: Yup.string().required('Это поле обязательно')
    });

    const formik = useFormik({initialValues, onSubmit, validationSchema});

    return (
        <Box bg='white' flex={1} p={5}>
            <Stack space='3'>
                <Input
                    value={formik.values.name}
                    onChangeText={formik.handleChange('name')}
                    onBlur={formik.handleBlur('name')}
                    placeholder='Введите название металла'/>
                <Input
                    value={formik.values.count}
                    onChangeText={formik.handleChange('count')}
                    onBlur={formik.handleBlur('count')}
                    placeholder='Введите количество'/>
                <Input
                    value={formik.values.price}
                    onChangeText={formik.handleChange('price')}
                    onBlur={formik.handleBlur('price')}
                    placeholder='Цена'/>
                <Input
                    value={formik.values.amount}
                    onChangeText={formik.handleChange('amount')}
                    onBlur={formik.handleBlur('amount')}
                    placeholder='Сумма'/>
                <Button onPress={formik.handleSubmit}>Добавить операцию</Button>
                <Button onPress={goBack}>Вернуться на главную</Button>
            </Stack>
        </Box>
    );
};

const styles = StyleSheet.create({

});