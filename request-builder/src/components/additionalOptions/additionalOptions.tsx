import React, {useState} from "react";
import Headers from "../headers/headers";
import Body from "../body/body";
import QueryParams from "../queryParams/queryParams";
import Authorization from "../authorization/authorizations";

const AdditionalOptions: React.FC = () => {
    const [isOptionSelected, setOption] = useState();

    return (
        <>
            <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200">
                <ul className="flex flex-wrap w-full -mb-px">
                    <li className="w-1/4">
                        <a href="#" className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active">Authorization</a>
                    </li>
                    <li className="w-1/4">
                        <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300">Headers</a>
                    </li>
                    <li className="w-1/4">
                        <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300">QueryParams</a>
                    </li>
                    <li className="w-1/4">
                        <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300">Body</a>
                    </li>
                </ul>
            </div>
            <Authorization />
            <Headers/>
            <QueryParams/>
            <Body/> 
        </>
    )
}

export default AdditionalOptions;