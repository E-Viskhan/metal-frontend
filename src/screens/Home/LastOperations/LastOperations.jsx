import { Box, Column, Heading, Row, Text } from "native-base";
import { useQuery } from "@apollo/client";
import { GET_ALL_TRANSACTIONS } from "../../../grapqlql/queries";

const LastOperations = () => {
    const { data, loading, error } = useQuery(GET_ALL_TRANSACTIONS);

    if (loading || error) return <></>;

    const operations = data.transactions.slice(-2);

    return (
        <Column>
            <Row justifyContent='space-between' alignItems='center' mb={8}>
                <Heading size='md'>Транзакции</Heading>
                <Text bold fontSize='md' color='gray.500'>Все</Text>
            </Row>
            {operations.map(({ id, operationType, articleName, amount, updatedAt, count }) => {
                const sign = operationType === 'PURCHASE' ? '-' : '+';
                const date = new Date(+updatedAt).toLocaleString();

                return (
                    <Box key={id} p={4} bg='#f9f4f4' mb={6} borderRadius={13}>
                        <Row mb={3} justifyContent='space-between'>
                            <Heading size='md' color='gray.700'>{articleName}</Heading>
                            <Heading size='md' color='gray.700'>{sign + ' ' + amount} руб.</Heading>
                        </Row>
                        <Row justifyContent='space-between'>
                            <Text fontSize='16' fontWeight='600' color='gray.500'>{date}</Text>
                            <Text fontSize='16' fontWeight='600' color='gray.500'>{count + ' кг'}</Text>
                        </Row>
                    </Box>
                )
            })}
        </Column>
    )
};

export default LastOperations;