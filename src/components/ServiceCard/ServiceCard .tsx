import clsx from 'clsx'
import Button from '../Button'
import { TServiceCardProps } from './types'
import Icon from '../Icon'
import './ServiceCard.scss'

const ServiceCard = (props: TServiceCardProps) => {
  const { className, imageSrc, title, description, items, buttonTitle, href } =
    props

  const Component = buttonTitle ? 'a' : 'div'
  const attribute = Component === 'a' ? { href } : ''

  return (
    <Component className={clsx(className, 'service-card')} {...attribute}>
      <div className="service-card__wrapper-image">
        <Icon
          className="service-card__image"
          name={imageSrc}
          width={70}
          height={70}
        />
      </div>
      <h3 className="service-card__title h4">{title}</h3>
      <div className="service-card__description">
        <p>{description}</p>
      </div>
      {items && (
        <ul className="service-card__list">
          {items.map((item, index) => (
            <li className="service-card__item" key={index}>
              {item}
            </li>
          ))}
        </ul>
      )}
      {buttonTitle && <Button>{buttonTitle}</Button>}
    </Component>
  )
}

export default ServiceCard
