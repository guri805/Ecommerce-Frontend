'use client';

const CustomBtn = ({ type = "button", btnClassName = "", btnName = "" }) => {
    return (
        <button type={type} className={btnClassName}>
            {btnName}
        </button>
    );
};

export default CustomBtn;
