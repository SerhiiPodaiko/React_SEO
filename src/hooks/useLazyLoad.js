import { useInView } from 'react-intersection-observer'

const useLazyLoad = () => {
    const { ref, inView } = useInView({
        threshold: 1
    })

    return {
        ref,
        inView
    }
}

export default useLazyLoad