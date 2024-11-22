import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    api: {
      bodyParser: {
        sizeLimit: '10mb', // Ajuste o limite conforme necessário
      },
    },
  };

export default nextConfig;
