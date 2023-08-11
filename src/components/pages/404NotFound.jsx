import Section from '../section/404NotFound/section';
import Header from '../header/404NotFound/header';
import Footer from '../footer/404NotFound/footer'

export default function notFound404() {
    return (
      <main className='min-h-screen flex flex-col font-space-mono py-4'>
      <Header/>
      <Section/>
      <Footer/>
      </main>
    )
  }