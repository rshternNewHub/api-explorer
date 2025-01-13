import React, {useState} from 'react';
import IconButton from '../../../../shared/components/buttons/iconButton';
import { FolderPlus, CircleX } from 'lucide-react';

const Input: React.FC = () => {
    const [isSent, setSend] = useState(false);
    
    const handleSend = (isActionSent: boolean) => {
        setSend(isActionSent);
    };

    const onAddToCollection = () => {
        console.log('added to collection');
    }
    
    const onClearClick = () => {
        console.log('Clear button clicked');
    }

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
            <IconButton
            Icon={FolderPlus}
            size="md"
            label="Save to Collection"
            onClick={onAddToCollection}
            variant="secondary"
            />
            <IconButton
            Icon={CircleX}
            size="md"
            label="Clear"
            onClick={onClearClick}
            variant="secondary"
            />
            </form>
        </>
    );
}

export default Input;