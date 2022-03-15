import { Layout } from "../components/Layout/Layout";
import { Mixing } from "../components/Mixing/Mixing";

const layoutProps = {
  title: "FAQ",
};

export default function Home() {
  return (
    <Layout {...layoutProps}>
      <section className="mixer">
        <div className="container">
          <div className="mixer__body">
            <Mixing title="Mixing"/>
          </div>
        </div>
      </section>
    </Layout>
  );
}
