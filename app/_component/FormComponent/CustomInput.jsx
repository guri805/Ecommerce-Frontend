'use client';

const CustomInput = ({
    type = "text",
    placeholder = "",
    inputClassName = "",
    id = "",
    name = "",
    labelValue = "",
    labelClassName = "",
    value = "",
    onChange,
    required = false
}) => {
    return (
        <div className="mb-4">
            {labelValue && (
                <label htmlFor={id || name} className={labelClassName}>
                    {labelValue}
                </label>
            )}
            <input
                type={type}
                id={id || name}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={inputClassName}
                required={required}
            />
        </div>
    );
};

export default CustomInput;
