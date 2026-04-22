import Logo from '@/components/Logo'
import './Footer.scss'
import { menuItems } from './menuItems'

export default () => {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__body">
          <div className="footer__body-wrapper">
            <Logo modeTitle="white" />
            <p>Детский психологический центр</p>
          </div>
          <div className="footer__body-wrapper">
            <h3 className="footer__title h4">Контакты</h3>
            <div className="footer__info">
              <a href="tel:89999999999" className="footer__link">
                8 (999) 999-99-99
              </a>
              <span>г. Ярославль, ул. 8 Марта, д. 3 к. 2, оф. 2</span>
            </div>
          </div>
          <div className="footer__body-wrapper">
            <h3 className="footer__title h4">Навигация</h3>
            <div className="footer__info">
              <ul className="footer__list">
                {menuItems.map(({label, href}, index) => (
                  <li className="footer__item" key={index}>
                    <a href={href} className='footer__link'>{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__extra">
          <span>© 2026, Детский психологический центр «Гармония роста»</span>
        </div>
      </div>
    </footer>
  )
}
