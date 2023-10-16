import ErrorSvg from '@assets/icons/error.svg'

const ErrorFallback = ({ error, resetErrorBoundary }) => {
    return (
        <div className='m-5 d-flex flex-column gap-2 p-3 text-danger bg-opacity-25 bg-danger rounded border-danger'>
            <div className='d-flex align-items-center justify-content-between'>
                <div className='d-flex flex-column gap-2'>
                    <strong>Something went wrong:</strong>
                    <pre>{error.message}</pre>
                </div>
                <img className='img-fluid' src={ErrorSvg} alt='Error | 404' />
            </div>
            <button className='btn btn-danger d-flex align-self-center'
                onClick={resetErrorBoundary}
            >
                Try again
            </button>
        </div>
    )
}

export default ErrorFallback
