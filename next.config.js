/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    MAP_API_KEY: process.env.MAP_API_KEY,
    MAP_API_PUBLIC_KEY: process.env.MAP_API_PUBLIC_KEY
  }
}
