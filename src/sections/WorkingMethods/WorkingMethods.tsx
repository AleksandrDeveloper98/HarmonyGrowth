import Section from '@/layouts/Section'
import { workingMethodItems } from './workingMethodItems'
import DescriptionCard from '@/components/DescriptionCard'
import kidSrc from '@/assets/images/workingMethods/kid.jpg'
import './WorkingMethods.scss'

const WorkingMethods = () => {
  return (
    <Section
      title="Методики работы"
      titleId="working-methods-title"
      description="Сенсорно-динамический зал «Дом Совы»"
      mode="background-alt"
      id='working-methods'
    >
      <div className="working-methods">
        <img
          src={kidSrc}
          alt="kid"
          className="working-methods__image"
          width={616}
          height={413}
        />
        <ul className="working-methods__list">
          {workingMethodItems.map((workingMethodItem, index) => (
            <li className="working-methods__item" key={index}>
              <DescriptionCard {...workingMethodItem} />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}

export default WorkingMethods
