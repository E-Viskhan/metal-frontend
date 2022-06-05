import { Box } from "native-base";
import BalanceCard from "./BalanceCard";
import PlusCard from "./PlusCard";
import MinusCard from "./MinusCard";

export default function MainCards() {
    return (
        <Box flexDirection='row' width='100%' justifyContent='space-between'>
            <BalanceCard/>
            <Box w='48%'>
                <PlusCard/>
                <MinusCard/>
            </Box>
        </Box>
    );
};
