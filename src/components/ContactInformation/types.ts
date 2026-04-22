type TContactInformationItem = {
  iconName: string
  label: string
  value: string
  href?: string  
}

export type TContactInformation = {
  items: TContactInformationItem[]
}