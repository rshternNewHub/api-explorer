import React from 'react';
import { Pencil } from 'lucide-react';

const Title: React.FC = () => {
    return (
        <>
            <form className="flex">
            <input type="url" id="url" className="w-full px-3 py-2 border focus:ring-2 focus:ring-blue-500"
                placeholder="Title"/>
            <button 
                className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors"
                title="Clear">
                    <Pencil size={16} />
                </button>
            </form>
        </>
    );
}

export default Title;