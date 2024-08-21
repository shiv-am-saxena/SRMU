const Button = ({
    children,
    type = 'button',
    bgColor = 'bg-slate-600',
    textColor = 'text-white',
    className = '',
    ...props
}) => {
    return (
        <button
            type={type}
            className={`p-2 rounded-md text-sm font-medium ${bgColor} ${textColor} ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button