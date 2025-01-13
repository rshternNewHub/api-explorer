import React, {useState} from "react";
import IconButton from '../../../../shared/components/buttons/iconButton';
import TextButton from '../../../../shared/components/buttons/textButton';
import {Copy} from 'lucide-react';
import CodeMirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';

const Body = () => {
    const [value, setValue] = useState("console.log('hello world!');");
    const onChange = React.useCallback((value: string, viewUpdate: any) => {
        console.log("value:", value);
      }, []);

    const onCopy = () => {
        console.log('copy button clicked');
        return true;
    }

    return(
        <>
            <div className="space-y-4 p-4">
                <caption className="flex justify-between items-center">   
                    <div className="flex justify-between items-center">
                        <div className="flex items-center justify-between p-4 border-b">
                            <h3 className="text-sm text-gray-500">View: </h3>
                            <TextButton 
                            size = 'sm'
                            onClick = {() => {}}
                            text = {"Pretty"}
                            variant = 'primary'
                            />
                            <TextButton 
                            size = 'sm'
                            onClick = {() => {}}
                            text = {"Raw"}
                            variant = 'primary'
                            />
                            <TextButton 
                            size = 'sm'
                            onClick = {() => {}}
                            text = {"Preview"}
                            variant = 'primary'
                            />
                        </div>
                        <div className="flex">
                            <IconButton
                            Icon={Copy}
                            size="md"
                            label="Copy"
                            onClick={onCopy}
                            variant="secondary"
                            />
                        </div>
                    </div>
                    <TextButton 
                    size = 'sm'
                    onClick = {() => {}}
                    text = {"Type"}
                    variant = 'primary'
                    />
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