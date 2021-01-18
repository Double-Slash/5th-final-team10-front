import { useCallback, useState } from "react";

const useFormInput = (initialValue) => {
    const [form, setForm] = useState(initialValue);
    const onChange = useCallback(
        (e) => {
            const { name, value } = e.target;
            setForm({ ...form, [name]: value });
        },
        [form]
    );

    return { form, onChange };
};
export default useFormInput;