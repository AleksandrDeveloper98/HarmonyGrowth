import kidSrc from '@/assets/images/kid.jpg'
import Button from '@/components/Button'
import './Hero.scss'

const Hero = () => {
  const title = 'hero-title'
  return (
    <section className="hero" aria-labelledby={title} id='home'>
      <div className="hero__inner container">
        <div className="hero__body">
          <h1 className="hero__title" id={title}>
            Гармонично развиваем личность ребёнка
          </h1>
          <div className="hero__description">
            <p>
              Целостный подход, включающий интеллектуальные, психологические и
              физические аспекты развития. Современные методики и
              профессиональная поддержка для вашего ребенка.
            </p>
          </div>
          <div className="hero__actions">
            <Button href='#sign-up' hasFillRight iconRight="arrow-right">
              Записаться на консультацию
            </Button>
            <Button href="tel:89999999999" iconRight="phone" mode="transparent">
              8 (999) 999-99-99
            </Button>
          </div>
        </div>
        <img
          className="hero__image"
          width={700}
          height={800}
          src={kidSrc}
          alt="kid"
          loading="lazy"
        />
      </div>
    </section>
  )
}

export default Hero
