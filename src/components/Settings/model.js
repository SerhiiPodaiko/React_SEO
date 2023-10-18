import DesktopFullDarkImage from '@assets/images/desktop-full-dark.jpg'
import DesktopShortLightImage from '@assets/images/desktop-short-light.jpg'
import LaptopDarkImage from '@assets/images/laptop-dark.jpg'
import LaptopLightImage from '@assets/images/laptop-light.jpg'
import MobileDarkImage from '@assets/images/mobile-dark.jpg'
import MobileLightImage from '@assets/images/mobile-light.jpg'

export const settingData = {
    desktop: {
        titleHead: 'Desktop versions',
        data: [
            { title: 'Desktop Full Dark', icon: DesktopFullDarkImage },
            { title: 'Desktop Short Light', icon: DesktopShortLightImage }
        ]
    },
    laptop: {
        titleHead: 'Laptop versions',
        data: [
            { title: 'Laptop Full Dark', icon: LaptopDarkImage },
            { title: 'Laptop Short Light', icon: LaptopLightImage },
            { title: 'Mobile Dark', icon: MobileDarkImage },
            { title: 'Mobile Light', icon: MobileLightImage }
        ]
    },
    mobile: {
        titleHead: 'Mobile versions',
        data: [
            { title: 'Mobile Dark', icon: MobileDarkImage },
            { title: 'Mobile Light', icon: MobileLightImage }
        ]
    }
}