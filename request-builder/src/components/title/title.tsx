import React from 'react';
import IconButton from '../../../../shared/components/buttons/iconButton';
import { Pencil } from 'lucide-react';

const Title: React.FC = () => {
    const onEditTitleClick = () => {
        console.log('Edit Title clicked');
    }
    return (
        <>
            <form className="flex">
            <input type="url" id="url" className="w-full px-3 py-2 border focus:ring-2 focus:ring-blue-500"
                placeholder="Title"/>
            <IconButton
            Icon={Pencil}
            size="md"
            label="Edit Title"
            onClick={onEditTitleClick}
            variant="secondary"
            />
            </form>
        </>
    );
}

export default Title;