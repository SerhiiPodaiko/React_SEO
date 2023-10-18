import { Link } from 'react-router-dom'
import cn from 'classnames'

import styles from './Settings.module.scss'
import { PAGE_SLUGS } from '@constants/pages'
import { settingData } from './model'
import SkeletonUI from '@ui/Skeleton/Skeleton';

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
                {Object.values(settingData).map(setting => (
                    <div className='col-12' key={setting.titleHead}>
                        <h4 className={styles.settingsHead}>{setting.titleHead}</h4>
                        <div className='pt-3 border rounded position-relative'>
                            <div className='row'>
                                {setting.data.map((item) => (
                                    <div className='col-12 col-md-6' key={item.title}>
                                        {
                                            item.icon ? (
                                                <img
                                                    className='img-fluid'
                                                    loading='lazy'
                                                    src={item.icon}
                                                    alt={item.title}
                                                />
                                            ) :  <SkeletonUI count={12} />
                                        }
                                    </div>
                                ))}
                            </div>
                        </div>
                        <hr className='border-3 my-4'/>
                    </div>
                ))}
            </div>
        </div>
    </section>
)

export default Settings