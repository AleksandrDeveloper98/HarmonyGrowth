import './Button.scss'
import clsx from 'clsx'
import type { TButtonProps } from './types'
import Icon from '../Icon'

export default (props: TButtonProps) => {
  const {
    className,
    type = 'button',
    href,
    children,
    iconLeft,
    hasFillLeft = false,
    iconRight,
    hasFillRight = false,
    /**
     * default = '' | transparent | border-radius-10
     */
    mode,
  } = props

  const isLink = href !== undefined
  const Component = isLink ? 'a' : 'button'
  const linkAttributes = { href }
  const buttonAttributes = { type }
  const attributesByTag = isLink ? linkAttributes : buttonAttributes

  return (
    <Component
      className={clsx('button', className, { [`button--${mode}`]: mode })}
      {...attributesByTag}
    >
      {iconLeft && <Icon hasFill={hasFillLeft} name={iconLeft} />}
      {children}
      {iconRight && <Icon hasFill={hasFillRight} name={iconRight} />}
    </Component>
  )
}
