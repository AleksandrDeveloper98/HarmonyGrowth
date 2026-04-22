import './Section.scss'
import type { TSectionProps } from './types'
import clsx from 'clsx'

export default (props: TSectionProps) => {
  const {
    className,
    title,
    titleId,
    description,
    children,
    id,
    /**
     * default = '' | background-alt
     */
    mode,
  } = props

  return (
    <section
      className={clsx(className, 'section', { [`section--${mode}`]: mode })}
      aria-labelledby={titleId}
      id={id}
    >
      <div className="section__inner container">
        <header className="section__header">
          <h2 className="section__title" id={titleId}>
            {title}
          </h2>
          {description && (
            <div className="section__description">
              <p>{description}</p>
            </div>
          )}
        </header>
        <div className="section__body">{children}</div>
      </div>
    </section>
  )
}
