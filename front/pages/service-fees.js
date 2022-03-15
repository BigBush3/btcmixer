import { Layout } from '../components/Layout/Layout';

const layoutProps = {
  title: 'Service fees'
}

export default function Home() {
  return (
    <Layout {...layoutProps}>
      <section className="mixer">
        <div className="container">
          <div className="mixer__body">
            <h1 className="mixer__title">Service fees</h1>
          </div>
        </div>
      </section>
    </Layout >
  );
}
