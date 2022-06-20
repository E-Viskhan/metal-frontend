import { useNavigation } from '@react-navigation/native';
import { Button } from "native-base";

export const MyBackButton = ({ children, ...props }) => {
    const { goBack } = useNavigation();

    return <Button onPress={goBack} {...props}>{children}</Button>;
}