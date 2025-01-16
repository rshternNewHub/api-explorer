import React, {useState} from "react";
import Headers from "../headers/headers";
import Body from "../body/body";
import QueryParams from "../queryParams/queryParams";
import Authorization from "../authorization/authorizations";
import Tabs from '../../../../shared/components/navigation/tabs';

const AdditionalOptions: React.FC = () => {
    const [isOptionSelected, setOption] = useState();
    const options = {
        Authorization: "Authorization",
        Headers: "Headers",
        QueryParams: "Query Params",
        Body: "Body"  
    }
    return (
        <>
            <Tabs options={options} />
            <Authorization />
            <Headers/>
            <QueryParams/>
            <Body/> 
        </>
    )
}

export default AdditionalOptions;