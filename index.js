import dotenv from 'dotenv';
import { readFileSync } from 'fs';
import { createAppAuth } from "@octokit/auth-app";

dotenv.config();

console.log('process.env.APP_ID', process.env.GH_APP_ID);


const appId = process.env.GH_APP_ID;
const privateKey = readFileSync(process.env.GH_PRIVATE_KEY, 'utf8');
const installationId = process.env.GH_INSTALLATION_ID;

const getToken = async () => {
        const auth = createAppAuth({
          appId: appId,
          privateKey: privateKey,
        })
        const installationAuthentication = await auth({
            type: "installation",
            installationId: installationId,
            // permissions: {
            //     contents: "read",
            //     metadata: "read",
            //     packages: "read",
            // }
          });
        console.log(installationAuthentication)
    };

await getToken();