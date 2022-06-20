import { Box, Text } from "native-base";
import { CustomSafeArea, Header } from "../../components";

export const Analytics = () => {
    return (
        <CustomSafeArea>
            <Header/>
            <Box flex={1} justifyContent='center' alignItems='center'>
                <Text>Здесь будут всякие графики и аналитика</Text>
            </Box>
        </CustomSafeArea>
    )
};