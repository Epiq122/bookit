/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_URL: "http://localhost:3000/api",
        DB_LOCAL_URI: "mongodb://localhost:27017/Bookit",
        DB_URI: ""
    }
}

module.exports = nextConfig
