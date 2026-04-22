import type { HTMLAttributes } from 'react'

type TLogoItem = {
  modeTitle?: string
}

export type TLogoProps = HTMLAttributes<HTMLAnchorElement> & TLogoItem
