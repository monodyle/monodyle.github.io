import Head from 'next/head';
import { Fragment } from 'react';
import { Footer } from './footer';
import { ActiveHeaderItem, Header } from './header';

interface Props {
  title?: string;
  active?: ActiveHeaderItem;
  footer?: boolean;
}

const Layout: React.FC<Props> = ({
  title = 'The Monody Space',
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
        <div className="container flex flex-col px-6 py-4 mx-auto md:py-12 md:px-16">
          <Header active={active} />
          <div className="h-4 sm:h-8 lg:h-16" />
          <div className="flex-auto flex-shrink-0">{children}</div>
        </div>
        <Footer illustration={footer} />
      </div>
    </Fragment>
  );
};

export { Layout };
