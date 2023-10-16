const Alert = ({ children, className, ...props }) => {
    return (
        <div className='my-2 alert alert-warning text-center' role='alert' {...props}>
            {children}
        </div>
    )
}

export default Alert
