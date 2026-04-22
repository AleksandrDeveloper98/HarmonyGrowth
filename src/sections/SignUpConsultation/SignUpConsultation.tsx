import SignUpForm from '@/components/SignUpForm'
import Section from '@/layouts/Section'

import './SignUpConsultation.scss'
import { signUpConsultationItems } from './signUpConsultationItems'
import ContactInformation from '@/components/ContactInformation'

const SignUpConsultation = () => {
  return (
    <Section
      title="Записаться на консультацию"
      titleId="sign-up-consultation-title"
      description="Свяжитесь с нами удобным для вас способом"
      id="sign-up"
    >
      <div className="sign-up-consultation">
        <SignUpForm className="sign-up-consultation__form" />
        <div className="sign-up-consultation__body">
          <div className="sign-up-consultation__info">
            <h3 className="sign-up-consultation__title h4">
              Контактная информация
            </h3>
            <div className="sign-up-consultation__information">
              <ContactInformation items={signUpConsultationItems} />
            </div>
          </div>
          <div className="sign-up-consultation__schedule">
            <h4 className="sign-up-consultation__schedule-title">
              Режим работы
            </h4>
            <div className="sign-up-consultation__schedule-wrapper">
              <div className="sign-up-consultation__schedule-item">
                <span>Понедельник - Пятница:</span>{' '}
                <time dateTime="09:00">09:00</time> -{' '}
                <time dateTime="20:00">20:00</time>
              </div>
              <div className="sign-up-consultation__schedule-item">
                <span>Суббота: </span>
                <time dateTime="10:00">10:00</time> -{' '}
                <time dateTime="18:00">18:00</time>
              </div>
              <div className="sign-up-consultation__schedule-item">
                <span>Воскресенье: </span>
                <span>выходной</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default SignUpConsultation
