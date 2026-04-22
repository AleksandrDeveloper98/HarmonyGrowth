import { TDescriptionCard } from './types'
import './DescriptionCard.scss'

const DescriptionCard = (props: TDescriptionCard) => {
  const { title, description } = props
  return (
    <div className="description-card">
      <p className="description-card__title">{title}</p>
      <div className="description-card__description">
        <p>{description}</p>
      </div>
    </div>
  )
}

export default DescriptionCard
