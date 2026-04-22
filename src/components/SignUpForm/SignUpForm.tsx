import clsx from 'clsx'
import Button from '../Button'
import Field from '../Field'
import './SignUpForm.scss'
import { TSignUpForm } from './types'

const SignUpForm = (props: TSignUpForm) => {
  const { className } = props
  
  return (
    <div className={clsx(className, 'sign-up-form')}>
      <form className="sign-up-form__form">
        <Field label="Ваше имя" isRequired placeholder="Александр" />
        <Field
          label="Телефон"
          mask="+7 (000) 000-00-00"
          isRequired
          placeholder="+7 (000) 000-00-00"
        ></Field>
        <Field
          label="Сообщение"
          type="textarea"
          placeholder="Расскажите о вашем запросе"
        />
        <Button type="submit" mode="border-radius-10">
          Отправить заявку
        </Button>
      </form>
    </div>
  )
}

export default SignUpForm
