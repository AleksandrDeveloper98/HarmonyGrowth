import '@/styles'
import type { GlobalProps } from 'minista'
import { Head } from 'minista'
import Header from '@/layouts/Header'
import Content from '@/layouts/Content'
import Footer from '@/layouts/Footer'

export default (props: GlobalProps) => {
  const { children, title, url } = props

  return (
    <>
      <Head htmlAttributes={{ lang: 'en' }}>
        <title>HarmonyGrowth | {title}</title>
        <script src="/src/main.ts" type="module" />
      </Head>
      <Header url={url} />
      <Content>{children}</Content>
      <Footer />
    </>
  )
}
