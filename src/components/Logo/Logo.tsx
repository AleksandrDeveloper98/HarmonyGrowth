import type { TLogoProps } from './types'
import clsx from 'clsx'
import Icon from '../Icon'

import './Logo.scss'

const Logo = (props: TLogoProps) => {
  const { 
    className,
    /**
     * default = '',| white
     */
     modeTitle
     } = props

  const title = 'Home'

  return (
    <a
      className={clsx('logo', className)}
      href="#home"
      title={title}
      aria-label={title}
    >
      <div className="logo__wrapper-icon">
        <Icon className="logo__icon" name="logo" />
      </div>
      <p
        className={clsx('logo__title', 'h6', {
          [`logo__title--${modeTitle}`]: modeTitle,
        })}
      >
        Гармония роста
      </p>
    </a>
  )
}
export default Logo
