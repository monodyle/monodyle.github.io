import { Fragment } from 'react';
import Head from 'next/head';
import { ActiveHeaderItem, Header } from './header';
import { Footer } from './footer';

interface Props {
  title?: string;
  active?: ActiveHeaderItem;
  footer?: boolean;
}

const Layout: React.FC<Props> = ({
  title = 'The Monody\'s Space',
  active,
  footer,
  children,
}) => {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="flex flex-col items-center justify-between min-h-screen">
        <div className="container flex flex-col px-16 py-20 mx-auto">
          <Header active={active} />
          <div className="h-16" />
          <div className="flex-auto flex-shrink-0">{children}</div>
        </div>
        <Footer illustration={footer} />
      </div>
    </Fragment>
  );
};

export { Layout };
