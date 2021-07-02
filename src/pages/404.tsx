import Image from 'next/image';
import { Layout } from 'components/layout/layout';

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="text-center">
        <Image
          src="/illustration/ancient.svg"
          alt="Ancient"
          className="block mx-auto"
          width={256}
          height={256}
        />
        <span className="text-2xl text-middle">
          Ohhh! You found lost space...
        </span>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
