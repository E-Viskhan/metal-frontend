import { CustomSafeArea, Header } from "../../components";
import MainCards from "./MainCards/MainCards";
import LastOperations from "./LastOperations/LastOperations";

export const Home = () => {
    return (
        <CustomSafeArea>
            <Header/>
            <MainCards/>
            <LastOperations/>
        </CustomSafeArea>
    );
};