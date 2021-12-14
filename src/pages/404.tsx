import Image from 'next/image';
import { Layout } from 'components/layout/layout';

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="text-center">
        <img
          src="/illustration/ancient.svg"
          alt="Ancient"
          className="block w-64 mx-auto"
        />
        <span className="text-2xl text-middle">
          Ohhh! You found lost space...
        </span>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
