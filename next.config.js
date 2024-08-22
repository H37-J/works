module.exports = {
    async headers() {
        return [
            {
                source: "/api/:path*",
                headers: [
                    { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
                ]
            }
        ]
    }
};