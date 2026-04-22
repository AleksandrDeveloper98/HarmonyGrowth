import Section from '@/layouts/Section'
import { programItems } from './programItems'
import ServiceCard from '@/components/ServiceCard'
import './OurPrograms.scss'

const OurPrograms = () => {
  return (
    <Section
      title="Наши программы"
      titleId="our-programs-title"
      description="Индивидуальный подход к каждому ребенку"
      id='programs'
    >
      <div className="our-programs">
        <ul className="our-programs__list">
          {programItems.map((programItem, index) => (
            <li className="our-programs__item" key={index}>
              <ServiceCard buttonTitle="Записаться" {...programItem} href='#sign-up'/>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}

export default OurPrograms
