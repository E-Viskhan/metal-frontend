import { Box } from "native-base";
import { MyBackButton } from "../../components";

export const Balance = () => {

    return (
        <Box bg='white' flex={1}>
            <MyBackButton>Вернуться на главную</MyBackButton>
        </Box>
    );
};