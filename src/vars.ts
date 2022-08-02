import packageJson from 'package.json';
const { cwd, env } = process;

export default {
  api: {
    name: packageJson.name,
    path: cwd(),
    port: Number(env.api_port ?? 3000),
    corsOrigin: env.api_corsOrigin ?? '*',
  },
  mongo: {
    url: env.mongo_url ?? 'mongodb://localhost:27017/db',
  },
};
