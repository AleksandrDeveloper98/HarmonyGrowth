import Section from '@/layouts/Section'
import { items } from './items'
import ServiceCard from '@/components/ServiceCard'
import './Vorteile.scss'

const Vorteile = () => {
  return (
    <Section
      title="Наши преимущества"
      titleId="vorteile-title"
      description="Профессиональный подход к развитию каждого ребенка"
    >
      <div className="vorteile">
        <ul className="vorteile__list">
          {items.map((item, index) => (
            <li className="vorteile__item" key={index}>
              <ServiceCard {...item} />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}

export default Vorteile
