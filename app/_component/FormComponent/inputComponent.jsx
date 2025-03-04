import React from 'react'

const InputComponent = ({
    type = "text",
    placeholder = "",
    inputClassName = "",
    id = "",
    name = "",
    labelValue = "",
    labelClassName = ""
}) => {
    return (
        <>
            {labelValue && (
                <label
                    htmlFor={id || name}
                    className={labelClassName}
                >
                    {labelValue}
                </label>
            )}
            <input
                type={type}
                id={id || name}
                name={name}
                placeholder={placeholder}
                className={inputClassName}
            />
        </>
    )
}

export default InputComponent
