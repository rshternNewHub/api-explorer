import React from "react";
import IconButton from '../../../../shared/components/buttons/iconButton';
import TextButton from '../../../../shared/components/buttons/textButton';
import {CirclePlus} from 'lucide-react';
const QueryParams: React.FC = () => {
    const onAddClicked = () => {
        console.log('Add query Params clicked');
    }
    return(
        <>
            <div className="space-y-4 p-4">
                <div className="flex justify-between items-center">
                    <h3 className="text-sm font-medium">Query Params</h3>
                <IconButton
                Icon={CirclePlus}
                size="md"
                label="Add Query Param"
                onClick={onAddClicked}
                variant="primary"
                />
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
                                expand
                            </th>
                            <td className="px-6 py-4">
                                products
                            </td>
                            <td className="px-6 py-4 text-right">
                                <TextButton 
                                onClick = {() => {}}
                                text = {"Edit"}
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

export default QueryParams;