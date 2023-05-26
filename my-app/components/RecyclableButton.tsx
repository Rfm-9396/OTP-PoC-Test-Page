import React from 'react';

type Props = {
    message?: string;
}

const RecyclableButton: React.FunctionComponent<Props> = ({ message }) => {
    // Conditionally render the button content
    const renderButtonContent = () => {
        if (message) {
            return message;
        }
        return 'Click me!';
    };

    return (
        <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
            {renderButtonContent()}
        </button>
    );
};

export default RecyclableButton;
