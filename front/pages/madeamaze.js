import { Layout } from '../components/Layout/Layout';

const layoutProps = {
  title: 'Madeamaze'
}

export default function Home() {
  return (
    <Layout {...layoutProps}>
      <section className="mixer">
        <div className="container">
          <div className="mixer__body">
            <h1 className="mixer__title">Madeamaze</h1>
          </div>
        </div>
      </section>
    </Layout >
  );
}
