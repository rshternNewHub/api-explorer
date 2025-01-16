import React from "react";
import Tabs from '../../../../shared/components/navigation/tabs';

const OptionsTab: React.FC = () => {
    const options = {
        Collections: "Collections",
        Environments: "Environments",
        History: "History"
    }

    return(
        <>
            <Tabs options={options} />
        </>
    )
}
export default OptionsTab;