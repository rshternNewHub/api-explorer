import React from 'react';
import Tabs from '../../../../shared/components/navigation/tabs';

const Options:React.FC = () => {
    const options = {
        Body: "Body",
        Headers: "Headers",
        TimeResults: "Time Results",
        Cookies: "Cookies"  
    }

    return(
        <>
            <Tabs options={options} />
        </>
    );

}

export default Options;