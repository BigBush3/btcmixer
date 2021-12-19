import { Layout } from '../components/Layout'

const layoutProps = {
  title: '404'
}

export default function Home() {
  return (
    <Layout {...layoutProps}>
      <section className="mixer">
        <div className="container">
          <div className="mixer__body" style={{ 'text-align': 'center' }}>
            <h1 className="mixer__title" style={{ 'font-size': '30vh' }}>404</h1>
          </div>
        </div>
      </section>
    </Layout >
  );
}