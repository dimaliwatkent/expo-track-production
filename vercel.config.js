// vercel.config.js
module.exports = {
  rewrites: async () => ({
    source: "/api/:path*",
    destination: "http://159.223.95.246:3010/api/:path*",
  }),
};
