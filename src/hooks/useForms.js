import { useState, useEffect } from 'react';


export const useForms = ( initialUrl = {} ) => {
    
    const [data, setData] = useState(null);
    const [fail, setFail] = useState(null);
    const [cargando, setCargando] = useState(null);
    const [url, setUrl] = useState(initialUrl);

    useEffect(() => {
        if(!url) return;
        setCargando(true);

        setData(null);
        setFail(null);

        fetch(url)
         
        .then((data) => {

            setCargando(false);
            if(data.cod >= 400){
                setFail(data.message);
                return;
            }
            setData(data);
        })
        .catch((error) => {
            setCargando(false);
            setFail(error);
        })
    }, [url]);

    return { data, fail, cargando, setUrl};
    
};

export default useForms;