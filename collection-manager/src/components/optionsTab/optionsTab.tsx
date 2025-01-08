import React from "react";

const OptionsTab: React.FC = () => {
    return(
        <>
            <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200">
                <ul className="flex flex-wrap w-full -mb-px">
                    <li className="w-1/3">
                        <a href="#" className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active">Collections</a>
                    </li>
                    <li className="w-1/3">
                        <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300">Environments</a>
                    </li>
                    <li className="w-1/3">
                        <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300">History</a>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default OptionsTab;