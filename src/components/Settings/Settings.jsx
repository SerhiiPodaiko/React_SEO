import { Link } from 'react-router-dom'
import cn from 'classnames'

import styles from './Settings.module.scss'
import { PAGE_SLUGS } from '@constants/pages'
import DesktopFullImage from '@assets/images/desktop-full.png'
import DesktopShortImage from '@assets/images/desktop-short.png'
import LaptopFullImage from '@assets/images/laptop-full.jpg'
import LaptopShortImage from '@assets/images/laptop-short.jpg'
import MobileFullImage from '@assets/images/mobile-full.jpg'
import MobileShortImage from '@assets/images/mobile-short.jpg'


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
                                <img className='img-fluid' src={DesktopFullImage} alt='Desktop Full' />
                            </div>
                            <div className='col-12 col-md-6 mt-4 mt-md-0'>
                                <img className='img-fluid' src={DesktopShortImage} alt='Desktop Short' />
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
                                <img className='img-fluid' src={LaptopFullImage} alt='Laptop Full' />
                            </div>
                            <div className='col-12 col-md-6 mt-4 mt-md-0'>
                                <img className='img-fluid' src={LaptopShortImage} alt='Laptop Short' />
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
                                <img className='img-fluid' src={MobileFullImage} alt='Mobile Full' />
                            </div>
                            <div className='col-12 col-md-6 mt-4 mt-md-0 text-center'>
                                <img className='img-fluid' src={MobileShortImage} alt='Mobile Short' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default Settings