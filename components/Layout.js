import Head from 'next/head';
import PropTypes from 'prop-types';
import { Header, Main } from './components';

const Layout = ({
  title,
  children,
}) => {

  return (
    <div className="app">
      <Head>
        <title>{title}</title>
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
      </Head>
      <Header />
      <Main>{children}</Main>
    </div>
  );
};


Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element])
    .isRequired,
};

export { Layout };