/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        DB_LOCAL_URI: "mongodb://localhost:27017/Bookit",
        DB_URI: ""
    }
}

module.exports = nextConfig
