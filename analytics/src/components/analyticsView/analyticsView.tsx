import React, {useState} from 'react';
import {ChartNoAxesCombined} from 'lucide-react';
import Modal from '../modal/modal';

const AnalyticsView: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openAnalyticsModal = () => {
        setIsOpen(!isOpen);
    }
    return(
        <>
            <div className="space-y-4">
                <h3 className="font-medium">Quick Analytics</h3>
                <ul className="">
                    <li className="flex justify-between">
                        <span className="text-gray-600">Success Rate</span>
                        <span className="text-green-600">98%</span>
                    </li>
                    <li className="flex justify-between">
                        <span className="text-gray-600">Avg Response</span>
                        <span>124ms</span>
                    </li>
                    <li className="flex justify-between">
                        <span className="text-gray-600">Requests (24h)</span>
                        <span>1,234</span>
                    </li>
                </ul>
            </div>
            <div className="flex justify-between items-center mb-4">
                
                <button 
                className="flex text-blue-600 text-sm hover:text-blue-700"
                data-modal-target="timeline-modal"
                data-modal-toggle="timeline-modal"
                onClick={() => openAnalyticsModal()}
                >
                View Full Analytics
                <ChartNoAxesCombined size={18} />
                </button>
            </div>

            <Modal 
                isOpen={isOpen} 
                onClose={() => setIsOpen(false)}
                children={''}
            ></Modal>
        </>
    );
}

export default AnalyticsView;