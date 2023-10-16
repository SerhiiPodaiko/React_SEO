import ErrorSvg from '@assets/icons/error.svg'

const ErrorPage = () => {
    return (
        <section className='vh-100 p-5 rounded' style={{ background: '#F4DEDE', border: '2px solid #DA7987', color: '#DA7987'}}>
            <div className='d-flex align-items-center justify-content-between'>
                <h2>Opps, Error</h2>
                <ErrorSvg />
            </div>
            <button className='btn btn-danger' onClick={() => reset()}>
                Try again
            </button>
        </section>
    )
}

export default ErrorPage