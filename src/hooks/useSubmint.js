import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";

const useSubmit = (dispatchName, value) => {
    const dispatch = useDispatch();
    const onSubmit = useCallback(
        (e) => {
            e.preventDefault();
            dispatch(dispatchName(value));
        },
        [value, dispatch, dispatchName]
    );

    return { onSubmit };
};

export default useSubmit;