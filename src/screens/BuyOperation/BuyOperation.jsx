import { Box, Button, CheckIcon, Input, Select, Stack } from "native-base";
import * as Yup from 'yup';
import { FormikProvider, useFormik } from "formik";
import { useApolloClient, useMutation } from "@apollo/client";
import { GET_ARTICLES } from "../../grapqlql/queries";
import { AmountInput } from "./AmountInput";
import { MAIN_ARTICLE_ID } from "../../constants";
import { ADD_TRANSACTION } from "../../grapqlql/mutations";
import { MyBackButton } from "../../components";

export const BuyOperation = () => {
    const client = useApolloClient();
    const { articles } = client.readQuery({ query: GET_ARTICLES });
    const [addTransaction, { data, loading, error }] = useMutation(ADD_TRANSACTION);

    const mainArticlePrice = articles.find(article => article.id === MAIN_ARTICLE_ID).price.toString();

    const initialValues = {
        articleId: MAIN_ARTICLE_ID,
        count: '',
        price: mainArticlePrice,
        amount: '0'
    };

    const onSubmit = async (values, actions) => {
        console.log(values);
        actions.resetForm();
    };

    const validationSchema = Yup.object({
        articleId: Yup.string().required('Это поле обязательно'),
        count: Yup.string().required('Это поле обязательно'),
        price: Yup.string().required('Это поле обязательно'),
        amount: Yup.string().required('Это поле обязательно')
    });

    const formik = useFormik({ initialValues, onSubmit, validationSchema });

    const handleSelectChange = articleId => {
        const article = articles.find(article => article.id === articleId);

        formik.setValues({
            ...formik.values,
            articleId,
            price: article.price.toString()
        });

    }

    return (
        <Box bg='white' flex={1} p={5}>
            <FormikProvider value={formik}>
                <Stack space='3'>
                    <Select
                        selectedValue={formik.values.articleId}
                        minWidth="200"
                        placeholder="Выберите тип металла"
                        _selectedItem={{ bg: "#ebe5e3", endIcon: <CheckIcon size="7"/> }}
                        onValueChange={handleSelectChange}
                    >
                        {articles?.map(({ id, name }) => <Select.Item key={id} label={name} value={id}/>)}
                    </Select>
                    <Input
                        value={formik.values.count}
                        onChangeText={formik.handleChange('count')}
                        onBlur={formik.handleBlur('count')}
                        placeholder='Введите количество'
                        keyboardType='numeric'
                        autoFocus
                    />
                    <Input
                        value={formik.values.price}
                        onChangeText={formik.handleChange('price')}
                        onBlur={formik.handleBlur('price')}
                        placeholder='Цена'
                        keyboardType='numeric'
                    />
                    <AmountInput
                        value={formik.values.amount}
                        onChangeText={formik.handleChange('amount')}
                        onBlur={formik.handleBlur('amount')}
                        placeholder='Сумма'
                        keyboardType='numeric'
                    />
                    <Button onPress={formik.handleSubmit}>Добавить операцию</Button>
                    <MyBackButton>Вернуться на главную</MyBackButton>
                </Stack>
            </FormikProvider>
        </Box>
    );
};