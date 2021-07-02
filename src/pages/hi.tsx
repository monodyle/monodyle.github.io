import { Fragment } from 'react';
import { Layout } from 'components/layout/layout';
import { LookLike } from 'components/look-like/look-like';
import { config, socials } from 'config/config';

const HiPage = () => {
  return (
    <Layout active="hi">
      <div className="flex justify-center pt-12 mx-24">
        <LookLike />
        <div className="w-16 h-16" />
        <div className="w-3/5">
          <h2 className="mb-4 text-2xl leading-9 tracking-wide uppercase font-display">
            Having something to share? 👀
          </h2>
          <div>or want to have a chit chat, just drop me a message.</div>
          <div className="h-12" />
          <div style={{ transform: 'rotate(-4deg)' }} className="mb-6">
            email ✉️
          </div>
          <a
            href="mailto:monodylh@gmail.com"
            className="text-2xl leading-9 tracking-wide uppercase font-display rainbown"
          >
            {config.email}
          </a>
          <div className="h-12" />
          <div style={{ transform: 'rotate(2.5deg)' }}>social network 🤖</div>
          <div className="flex -mt-3">
            {Object.entries(socials).map(([page, url]) => (
              <Fragment key={page}>
                <a
                  href={url}
                  target="_blank"
                  className="text-2xl leading-9 tracking-wide uppercase font-display rainbown"
                  rel="noreferrer"
                >
                  {page}
                </a>
                <div className="w-12" />
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HiPage;
