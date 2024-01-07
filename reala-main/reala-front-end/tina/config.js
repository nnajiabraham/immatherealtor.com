import schemas from "./schema";
import { defineConfig } from "tinacms";
// Your hosting provider likely exposes this as an environment variable
const branch =
	process.env.GITHUB_BRANCH ||
	process.env.VERCEL_GIT_COMMIT_REF ||
	process.env.HEAD ||
	"main";

export default defineConfig({
	branch,

	// contentApiUrlOverride:
	// 	"https://super-duper-couscous-v6v9wx445993x4g7-4001.app.github.dev/graphql",
	// contentApiUrlOverride: "localhost:4001/graphql",
	// Get this from tina.io
	clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
	// Get this from tina.io
	token: process.env.TINA_TOKEN,

	build: {
		publicFolder: "public",
		outputFolder: "admin",
	},
	media: {
		tina: {
			publicFolder: "public",
			mediaRoot: "/images/uploads",
		},
	},
	// See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
	schema: schemas,
});
