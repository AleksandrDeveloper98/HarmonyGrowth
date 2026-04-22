import Icon from '../Icon'
import { TSpecialistCard } from './types'

import './SpecialistCard.scss'

const SpecialistCard = (props: TSpecialistCard) => {
  const { imgSrc, name, description, achievements = [] } = props

  return (
    <div className="specialist-card">
      <img
        className="specialist-card__image"
        src={imgSrc}
        alt={`specialist-${name}`}
        width={620}
        height={410}
      />
      <div className="specialist-card__body">
        <h3 className="specialist-card__title">О специалисте</h3>
        <p className="specialist-card__name h4">{name}</p>
        <div className="specialist-card__description">
          <p>{description}</p>
        </div>
        <ul className="specialist-card__list">
          {achievements.map((achievement, index) => (
            <li className="specialist-card__item" key={index}>
              <Icon name="circle-check" width={24} height={24}/>
              <p>{achievement}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SpecialistCard
