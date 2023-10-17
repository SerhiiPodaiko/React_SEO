import cn from 'classnames'

import useTheme from '@hooks/ui/useTheme'
import MoonSvg from '@assets/icons/moon.svg'
import SunSvg from '@assets/icons/sun.svg'

const Theme = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className={cn('d-flex flex-column gap-1')}>
            <img
                src={MoonSvg}
                className={theme === 'dark' && 'rounded border border-warning'}
                onClick={() => toggleTheme('dark')}
                alt='Moon'/>
            <img
                src={SunSvg}
                className={theme === 'light' && 'rounded border border-warning'}
                onClick={() => toggleTheme('light')}
                alt='Sun'/>
        </div>
    )
}

export default Theme