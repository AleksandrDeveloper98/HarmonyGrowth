import SpecialistCard from '@/components/SpecialistCard'
import { specialistItems } from './specialistItems'
import './AboutSpecialist.scss'

const AboutSpecialist = () => {
  const titleId = 'about-specialist-title'

  return (
    <section
      className="about-specialist"
      aria-labelledby={titleId}
      id="about-center"
    >
      <div className="about-specialist__inner container">
        <h2 className="visually-hidden" id={titleId}>
          Наши специалисты
        </h2>
        <ul className="about-specialist__list">
          {specialistItems.map((specialistItem, index) => (
            <li className="about-specialist__item" key={index}>
              <SpecialistCard {...specialistItem} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default AboutSpecialist
