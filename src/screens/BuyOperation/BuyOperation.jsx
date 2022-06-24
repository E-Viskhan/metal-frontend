import { Box, Button, CheckIcon, Input, InputGroup, Select, Stack, Text, useToast } from "native-base";
import * as Yup from 'yup';
import { useFormik } from "formik";
import { useMutation, useQuery } from "@apollo/client";
import { GET_ARTICLES, GET_TRANSACTIONS } from "../../grapqlql/queries";
import { ADD_TRANSACTION } from "../../grapqlql/mutations";
import { MAIN_ARTICLE_ID } from "../../constants";

export const BuyOperation = () => {
    const { data: { articles } } = useQuery(GET_ARTICLES);
    // TODO: Изменить refetching на изменение кэша, чтобы не делать лишний запрос данных.
    const [addTransaction, { data, loading, error }] = useMutation(ADD_TRANSACTION, {
        refetchQueries: [
            { query: GET_TRANSACTIONS, variables: { take: 2, orderBy: { id: 'desc' } } }
        ]
    });
    const toast = useToast();

    const getArticlePrice = articleId => articles.find(article => article.id === articleId).price;
    const clearStr = str => str.replace(',', '.').replace('-', '').replace(' ', '') || 0;
    const getAmount = (count, price) => Math.ceil(parseFloat(count) * parseFloat(price));

    const initialValues = {
        articleId: MAIN_ARTICLE_ID,
        count: '',
        price: getArticlePrice(MAIN_ARTICLE_ID),
        amount: ''
    };

    const onSubmit = async (values, actions) => {
        console.log(values);
        let formData = {};

        for (let item in values) {
            formData[item] = parseFloat(values[item]);
        }

        await addTransaction({
            variables: {
                operationType: "PURCHASE",
                ...formData,
            },
            update: (cache, { data: { addTransaction } }) => {
                // console.log(cache)
                // const data = cache.readQuery({ query: GET_TRANSACTIONS });
                // console.log(data);
                // data.items = [...data.items, addItem];
                // cache.writeQuery({ query: GET_ITEMS }, data);
            }
        });

        toast.show({
            title: "Операция успешно добавлена",
            placement: "top",
            duration: 1000
        })

        actions.resetForm();
    };

    const validationSchema = Yup.object({
        articleId: Yup.number().required('Это поле обязательно'),
        count: Yup.number().required('Это поле обязательно'),
        price: Yup.number().required('Это поле обязательно'),
        amount: Yup.number().required('Это поле обязательно')
    });

    const formik = useFormik({ initialValues, onSubmit, validationSchema });

    const handleSelectChange = articleId => {
        const price = getArticlePrice(articleId);
        const count = formik.values.count;
        const amount = getAmount(count, price);

        formik.setValues({
            articleId,
            price,
            count,
            amount
        }, false);
    };

    const handleCountChange = inputValue => {
        const count = clearStr(inputValue);
        const price = formik.values.price;
        const amount = getAmount(count, price);

        formik.setValues({
            ...formik.values,
            count,
            amount
        }, false);
    };


    const handlePriceChange = inputValue => {
        const price = clearStr(inputValue);
        const count = formik.values.count;
        const amount = getAmount(count, price);

        formik.setValues({
            ...formik.values,
            price,
            amount
        }, false);
    };

    return (
        <Box bg='white' flex={1} p={5}>
            <Stack space='3'>
                <InputGroup flexDirection='column'>
                    <Text mb='2' bold>Вид металла</Text>
                    <Select
                        selectedValue={formik.values.articleId}
                        placeholder="Выберите тип металла"
                        _selectedItem={{ bg: "#ebe5e3", endIcon: <CheckIcon size="7"/> }}
                        onValueChange={handleSelectChange}
                    >
                        {articles?.map(({ id, name }) => <Select.Item key={id} label={name} value={id}/>)}
                    </Select>
                </InputGroup>
                <InputGroup flexDirection='column'>
                    <Text mb='2' bold>Количество</Text>
                    <Input
                        value={formik.values.count ? formik.values.count.toString() : ''}
                        onChangeText={handleCountChange}
                        placeholder='Введите количество'
                        keyboardType='numeric'
                        autoFocus
                    />
                </InputGroup>
                <InputGroup flexDirection='column'>
                    <Text mb='2' bold>Цена</Text>
                    <Input
                        value={formik.values.price ? formik.values.price.toString() : ''}
                        onChangeText={handlePriceChange}
                        placeholder='Цена'
                        keyboardType='numeric'
                    />
                </InputGroup>
                <InputGroup flexDirection='column'>
                    <Text mb='2' bold>Сумма</Text>
                    <Input
                        value={formik.values.amount ? formik.values.amount.toString() : ''}
                        editable={false}
                        placeholder='Сумма'
                        keyboardType='numeric'
                    />
                </InputGroup>
                <Button onPress={formik.handleSubmit}>Добавить операцию</Button>
                {/*<MyBackButton>Вернуться на главную</MyBackButton>*/}
            </Stack>
        </Box>
    );
};