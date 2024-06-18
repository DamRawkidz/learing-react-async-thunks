import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";

function useThunk(thunk: any){
    const [isLoading, setIsloading] = useState(false);
    const [error, setError] = useState(null)
    const dispatch = useDispatch();

    const runThunk:any = useCallback((arg: any) => {
        setIsloading(true)
        dispatch(thunk(arg))
            .unwrap()
            .catch((err: any) => setError(err))
            .finally(() => setIsloading(false))
    },[dispatch, thunk])

    return [
        runThunk,
        isLoading, 
        error
    ]
}

export default useThunk;