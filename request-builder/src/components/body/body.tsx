import React from "react";

const Body: React.FC = () => {
    return(
        <>
            <div className="space-y-4 p-4">
                <caption className="flex justify-between items-center">
                    <h3 className="text-sm font-medium">Body</h3>
                    <button className="text-blue-600 text-sm">Type</button>
                </caption>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                               json body...
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Body;