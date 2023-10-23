const { redirect } = require('next/dist/server/api-utils')

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/bank-accounts',
        permanent: false,
      },
    ]
  }
}

module.exports = nextConfig
