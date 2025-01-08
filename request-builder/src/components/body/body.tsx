import React, {useState} from "react";
import {Copy} from 'lucide-react';
import CodeMirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';

const Body: React.FC = () => {
    const [value, setValue] = useState("console.log('hello world!');");
    const onChange = React.useCallback((value: string, viewUpdate: any) => {
        console.log("value:", value);
      }, []);
  
    return(
        <>
            <div className="space-y-4 p-4">
                <caption className="flex justify-between items-center">   
                    <div className="flex justify-between items-center">
                        <h3 className="text-sm font-medium">Body</h3>
                        <div className="flex items-center justify-between p-4 border-b">
                            <h3 className="text-sm text-gray-500">View: </h3>
                            <button className="text-sm text-blue-600 font-medium hover:text-gray-800">Pretty</button>
                            <button className="text-sm text-blue-600 font-medium hover:text-gray-800">Raw</button>
                            <button className="text-sm text-blue-600 font-medium hover:text-gray-800 ">Preview</button>
                        </div>
                        <div className="flex">
                            <button><Copy size={18}/></button>
                        </div>
                    </div>
                    <button className="text-blue-600 text-sm">Type</button>
                </caption>
                <CodeMirror
                value="{}"
                height="200px"
                extensions={[json()]}
                onChange={(value, viewUpdate) => {
                }}
                />
            </div>
        </>
    );
}

export default Body;