/** @type {import('next').NextConfig} */
"/src/app/styles/variables.module.scss";
const nextConfig = {
  sassOptions: {
    includePaths: ["./src"],
    prependData: `@import "/src/app/styles/variables.module.scss";`,
  },
};

export default nextConfig;
