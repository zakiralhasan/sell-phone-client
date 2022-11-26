import React from 'react';

const CommonButton = ({ children, design }) => {
    return (
        <div>
            <button className={`bg-gradient-to-r from-[#F45510] to-[#2CBBD5] ${design}`}>{children}</button>
        </div>
    );
};

export default CommonButton;