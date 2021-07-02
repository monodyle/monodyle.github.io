import { Layout } from "components/layout/layout";
import { LookLike } from "components/look-like/look-like";

const IndexPage = () => (
  <Layout footer>
    <div className="flex items-center justify-between pt-12 mx-24">
      <div className="w-1/2">
        <h2 className="mb-5 text-2xl leading-9 tracking-wide uppercase font-display">
          Introduce Me ✌️
        </h2>
        <p>
          My name is <strong>Minh "Monody" Le Hong</strong>. Just a guy tends to
          be handsome gradually over the years…
        </p>
        <div className="h-5" />
        <p className="text-middle">
          I was born a child of the mountains and forests, raised on the land of
          sunny which named Central Highlands. Should be I had to grow
          vegetables and chickens, but now I go coding and design.
        </p>
      </div>
      <div className="w-16 h-16" />
      <LookLike />
    </div>
  </Layout>
);

export default IndexPage;
