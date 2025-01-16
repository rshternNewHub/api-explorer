import React, {useState} from "react";

interface TabsProps {
    options: object;
    onClick?: () => void;
    disabled?: boolean;
}

const Tabs:React.FC<TabsProps> = ({
    options,
    onClick = () => null,
    disabled = false
}) => {
    const [active, setActiveTab] = useState<string>(Object.keys(options)[0]);
    const keysArray = Object.keys(options);
    const totalTabs = keysArray.length;
    const handleOptionSelect = (key:string) => {
        setActiveTab(key);
    }

    const optionsEntries = Object.entries(options);
    return(
        <>
            <div className="text-sm font-medium text-center text-gray-500">
                <ul className="flex flex-wrap w-full -mb-px">
                    {optionsEntries.map(([key, value]) => (
                        <li className={`
                            flex w-1/${totalTabs} 
                            justify-center 
                            border-b 
                            ${active == key 
                                ? "border-blue-600" 
                                : "border-gray-200 hover:border-blue-600"
                            }
                        `} key= {key}>
                            <a
                                key={key}
                                href="#"
                                className={
                                    active === key? "inline-block p-4 text-blue-600 active" 
                                    : "inline-block p-4"
                                }
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleOptionSelect(key);
                                }}
                            >
                                {value}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Tabs;