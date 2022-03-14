import { MixerForm } from '../components/MixerForm';
import { Layout } from '../components/Layout/Layout';
import useTranslation from 'next-translate/useTranslation';

const layoutProps = {
  title: 'Mixer'
}

export default function Home() {
  const { t } = useTranslation('home');

  return (
    <Layout {...layoutProps}>
      <section className="mixer">
        <div className="container">
          <div className="mixer__body">
            <h1 className="mixer__title">{t('title')}</h1>

            <MixerForm />
          </div>
        </div>
      </section>
    </Layout>
  );
}
