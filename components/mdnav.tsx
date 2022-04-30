import Container from './container';
import useTranslation from 'next-translate/useTranslation';
import Router, { useRouter } from 'next/router'
import AppContext from '../lib/AppContext';
import { useContext } from 'react';
export default function Footer() {
const appConfig=useContext(AppContext)
  const { t } = useTranslation('footer')
  const router = useRouter()
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col    items-center">
          <h3 className="text-4xl  font-bold tracking-tighter leading-tight text-center ">
            {t('common:description')}
          </h3>
          <div className="flex flex-col    justify-center items-center ">
            <a
              href="https://nextjs.org/docs/basic-features/pages"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12  duration-200 transition-colors mb-6 "
            >
              {t('Read Documentation')}
            </a>
            {router.locale==='zh-CN'?(<a
              href='https://beian.miit.gov.cn/'
              className="mx-3 font-bold hover:underline"
            >
              {appConfig.RECORD}
            </a>):(<a href={appConfig.GitHub}>
              {t('View on GitHub')}
            </a>)}
          </div>
        </div>
      </Container>
    </footer>
  )
}