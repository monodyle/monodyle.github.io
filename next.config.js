module.exports = {
  async rewrites() {
    return [
      {
        source: '/feed',
        destination: '/api/feed',
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/feed',
        headers: [{ key: 'content-type', value: 'text/xml' }],
      },
    ];
  },
  images: {
    loader: 'imgix',
    path: '',
  },
};
