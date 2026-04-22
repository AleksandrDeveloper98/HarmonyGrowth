import { ComponentPropsWithRef } from 'react'

export type TButtonProps = {
  href?: string
  iconLeft?: string
  hasFillLeft?: boolean
  iconRight?: string
  hasFillRight?: boolean
  mode?: string
} & ComponentPropsWithRef<'button'>
