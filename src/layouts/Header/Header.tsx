import './Header.scss'
import type { THeaderProps } from './types'
import clsx from 'clsx'
import Logo from '@/components/Logo'
import '@/components/Button/Button.scss'
import BurgerButton from '@/components/BurgerButton'
import { menuItems } from './menuItems'

export default (props: THeaderProps) => {
  const { url  } = props

  return (
    <header className="header" data-js-overlay-menu="">
      <div className="header__inner container">
        <Logo className="header__logo" />
        <dialog
          className="header__overlay-menu-dialog"
          data-js-overlay-menu-dialog=""
        >
          <nav className="header__menu">
            <ul className="header__menu-list">
              {menuItems.map(({ label, href, mode }, index) => (
                <li className="header__menu-item" key={index}>
                  <a
                    className={clsx(
                      'header__menu-link',
                      mode && 'button',
                      href === (url) && 'is-active'
                    )}
                    href={href}
                    title={label}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </dialog>
        <BurgerButton
          className="header__burger-button visible-tablet"
          extraAttrs={{
            'data-js-overlay-menu-burger-button': '',
          }}
        />
      </div>
    </header>
  )
}
