import { Layout } from '../components/Layout'

const layoutProps = {
  title: 'API'
}

export default function Home() {
  return (
    <Layout {...layoutProps}>
      <section className="mixer">
        <div className="container">
          <div className="mixer__body">
            <h1 className="mixer__title">API</h1>
          </div>
        </div>
      </section>
    </Layout >
  );
}
