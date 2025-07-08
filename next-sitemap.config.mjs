const generatePaths = async () => {
    const paths = [];

    const staticPaths = [
        '/',
    ];

    staticPaths.forEach(path => {
        paths.push({
            loc: path,
            changefreq: 'monthly',
            priority: path === '/' ? 1.0 : 0.8,
            lastmod: new Date().toISOString(),
        });
    });

    return paths;
};

const config = {
    siteUrl: 'https://prabindmoktan.com.np/',
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [{ userAgent: '*', allow: '/' }],
        additionalSitemaps: [
            'https://prabindmoktan.com.np/sitemap.xml',
        ],
    },
    additionalPaths: async () => await generatePaths(),
};

export default config;
