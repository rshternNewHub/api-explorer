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
            <div className="w-fill">
                <input type="url" id="url" className="w-full px-3 py-2.5 border"
                placeholder="https://example.com"
                required />
            </div>
            <button type="button" id="send"
            className="flex flex-row z-10 items-center px-6 text-md font-medium bg-white border rounded-r-md hover:bg-gray-50" 
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