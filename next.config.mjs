/** @type {import('next').NextConfig} */
const nextConfig = {
        images: {
          remotePatterns: [
            {
              protocol: 'http',
              hostname: 'audi.carwallpapers.ru',
              port: '',
              pathname: '/audi/rs7-sportback/2019/Audi-RS7-Sportback-2019-1280x800-037.jpg',
            },
          ],
        },
      
};

export default nextConfig;
