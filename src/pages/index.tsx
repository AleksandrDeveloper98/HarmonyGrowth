import type { Metadata } from 'minista'
import Hero from '@/sections/Hero'
import Vorteile from '@/sections/Vorteile'
import AboutSpecialist from '@/sections/AboutSpecialist'
import OurPrograms from '@/sections/OurPrograms'
import WorkingMethods from '@/sections/WorkingMethods'
import SignUpConsultation from '@/sections/SignUpConsultation'

export const metadata: Metadata = {
  title: 'Home',
}

export default () => {
  return (
    <>
      <Hero />
      <Vorteile />
      <AboutSpecialist />
      <OurPrograms />
      <WorkingMethods />
      <SignUpConsultation />
    </>
  )
}
