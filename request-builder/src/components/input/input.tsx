import React, {useState} from 'react';

const Input: React.FC = () => {
    const [isSent, setSend] = useState(false);
    
    const handleSend = (isActionSent: boolean) => {
        setSend(isActionSent);
    };

    return (
        <>    
            <form className='inline-flex w-fill'>
            <div className="mb-6 w-fill">
                <input type="url" id="url" className="w-full px-3 py-2 border focus:ring-2 focus:ring-blue-500"
                placeholder="https://example.com"
                required />
            </div>
            <button type="button" id="send"
            className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-e-0 border-gray-300 dark:border-gray-700 dark:text-white rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            onClick={(e) => {
                e.preventDefault();
                handleSend(true);
            }}>
                Send
            </button>
            </form>
        </>
    );
}

export default Input;