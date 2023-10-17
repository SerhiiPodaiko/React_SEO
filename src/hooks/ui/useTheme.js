import { useLayoutEffect, useState } from 'react'

const isDarkTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches
const defaultTheme = isDarkTheme ? 'dark' : 'light'

const useTheme = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || defaultTheme)

    useLayoutEffect(() => {
        document.querySelector('body').setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    const toggleTheme = (theme) => {
        setTheme(theme)
    }

    return {
        theme,
        toggleTheme
    }
}

export default useTheme
