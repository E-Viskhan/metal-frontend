import { useFormikContext } from "formik";
import { useEffect } from "react";
import { Input } from "native-base";

export const AmountInput = props => {
    const { values, touched, setFieldValue } = useFormikContext();

    useEffect(() => {
        const count = Number.parseFloat(values.count.replace(',', '.')) || 0;
        const price = Number.parseFloat(values.price.replace(',', '.')) || 0;
        const amount = Math.ceil(count * price).toString();

        setFieldValue('amount', amount)
    }, [values.count, values.price, touched, setFieldValue])

    return <Input {...props}/>;
}
