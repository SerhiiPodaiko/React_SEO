import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { PAGE_SLUGS } from '@constants/pages'
import NotFoundSvg from '@assets/icons/not-found.svg'

const ErrorPage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const timeout = setTimeout(() => navigate(PAGE_SLUGS.home), 3000)

        return () => clearTimeout(timeout)
    }, [])


    return (
        <section className='d-flex flex-column p-5 rounded' style={{ background: '#F4DEDE', border: '2px solid #DA7987', color: '#DA7987'}}>
            <button className='align-self-start btn btn-danger' onClick={() => navigate(PAGE_SLUGS.home)}>
                Back to Home
            </button>
            <img src={NotFoundSvg} className='w-25 align-self-center img-fluid' alt='Not Found | 404' />
        </section>
    )
}

export default ErrorPage