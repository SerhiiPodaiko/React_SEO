import { Link } from 'react-router-dom'
import cn from 'classnames'

import styles from './Settings.module.scss'
import { PAGE_SLUGS } from '@constants/pages'
import DesktopFullDarkImage from '@assets/images/desktop-full-dark.jpg'
import DesktopShortLightImage from '@assets/images/desktop-short-light.jpg'
import LaptopDarkImage from '@assets/images/laptop-dark.jpg'
import LaptopLightImage from '@assets/images/laptop-light.jpg'
import MobileDarkImage from '@assets/images/mobile-dark.jpg'
import MobileLightImage from '@assets/images/mobile-light.jpg'


const Settings = () => (
    <section className={cn('p-2', styles.settings)}>
        <div className='container'>
            <header className='d-flex flex-column gap-2'>
                <Link to={PAGE_SLUGS.home} className='d-flex align-self-start btn btn-outline-primary'>
                    Back to home
                </Link>
                <h4 className={cn('mb-4', styles.settingsTitle)}>Settings</h4>
            </header>
            <div className='row'>
                <div className='col-12'>
                    <h4 className={styles.settingsHead}>Desktop version</h4>
                    <div className='pt-3 border rounded position-relative'>
                        <div className='row'>
                            <div className='col-12 col-md-6'>
                                <img className='img-fluid' src={DesktopFullDarkImage} alt='Desktop Full Dark' />
                            </div>
                            <div className='col-12 col-md-6 mt-4 mt-md-0'>
                                <img className='img-fluid' src={DesktopShortLightImage} alt='Desktop Short Light' />
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='border-3 my-4'/>
                <div className='col-12'>
                    <h4 className={styles.settingsHead}>Laptop version</h4>
                    <div className='pt-3 border rounded position-relative'>
                        <div className='row'>
                            <div className='col-12 col-md-6'>
                                <img className='img-fluid' src={LaptopDarkImage} alt='Laptop Full' />
                            </div>
                            <div className='col-12 col-md-6 mt-4 mt-md-0'>
                                <img className='img-fluid' src={LaptopLightImage} alt='Laptop Short' />
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='border-3 my-4'/>
                <div className='col-12'>
                    <h4 className={styles.settingsHead}>Mobile version</h4>
                    <div className='pt-3 border rounded position-relative'>
                        <div className='row'>
                            <div className='col-12 col-md-6 text-center'>
                                <img className='img-fluid' src={MobileDarkImage} alt='Mobile dark' />
                            </div>
                            <div className='col-12 col-md-6 mt-4 mt-md-0 text-center'>
                                <img className='img-fluid' src={MobileLightImage} alt='Mobile light' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default Settings