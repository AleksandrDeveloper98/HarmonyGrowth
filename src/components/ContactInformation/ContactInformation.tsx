import Icon from '../Icon'
import { TContactInformation } from './types'
import './ContactInformation.scss'

const ContactInformation = (props: TContactInformation) => {
  const { items } = props

  return (
    <div className="contact-information">
      <dl className="contact-information__list">
        {items.map((item, index) => {
          return (
            <div className="contact-information__item" key={index}>
              <div className="contact-information__wrapper-icon">
                <Icon
                  name={item.iconName}
                  className="contact-information__icon"
                />
              </div>
              <div className="contact-information__wrapper">
                <dt className="contact-information__key">{item.label}</dt>
                <dd className="contact-information__value">
                  {item.href ? (
                    <a href={item.href} className="contact-information__link">
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </dd>
              </div>
            </div>
          )
        })}
      </dl>
    </div>
  )
}

export default ContactInformation
