import React from "react";
import TextButton from '../../../../shared/components/buttons/textButton';

interface AuthSection {
    type: 'Bearer' | 'Basic' | 'OAuth2' | 'API Key';
    value: string;
}

const Authorization: React.FC = () => {
    return(
        <>
            <div className="space-y-4 p-4">
                    <div className="flex justify-between items-center">
                        <h3 className="text-sm font-medium">Autorization</h3>
                    </div>

                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Key
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Value
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Bearer
                            </th>
                            <td className="px-6 py-4">
                                AccessToken
                            </td>
                            <td className="px-6 py-4 text-right">
                            <TextButton 
                                onClick = {() => {}}
                                text = {"Authorization Settings"}
                                variant = 'primary'
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Authorization;