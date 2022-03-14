import Head from 'next/head';
import { Body } from './components/body';

export const Mixing = ({
  title,
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
      <Body />
    </div>
  );
};