import React from "react";
import { defineConfig, wrapFieldsWithMeta } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
	process.env.GITHUB_BRANCH ||
	process.env.VERCEL_GIT_COMMIT_REF ||
	process.env.HEAD ||
	"main";

export default defineConfig({
	branch,

	contentApiUrlOverride:
		"https://super-duper-couscous-v6v9wx445993x4g7-4001.app.github.dev/graphql",
	// Get this from tina.io
	clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
	// Get this from tina.io
	token: process.env.TINA_TOKEN,

	build: {
		outputFolder: "admin",
		publicFolder: "public",
	},
	media: {
		tina: {
			mediaRoot: "uploads",
			publicFolder: "public",
		},
	},
	// See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
	schema: {
		collections: [
			{
				name: "post",
				label: "Posts",
				path: "content/posts",
				fields: [
					{
						type: "string",
						name: "title",
						label: "Title",
						isTitle: true,
						required: true,
					},
					{
						type: "rich-text",
						name: "body",
						label: "Body",
						isBody: true,
					},
				],
				ui: {
					// This is an DEMO router. You can remove this to fit your site
					router: ({ document }) => `/demo/blog/${document._sys.filename}`,
				},
			},
			{
				name: "blog",
				label: "Blogs",
				path: "content/blogs",
				fields: [
					{
						type: "string",
						name: "title",
						label: "Title",
						isTitle: true,
						required: true,
					},
				],
			},
			{
				name: "property",
				label: "Properties",
				path: "content/properties",
				ui: {
					beforeSubmit: ({ values }) => {
						// console.log("beforeSubmit", arg)
						// console.log("csm", csm)
						// console.log("form", form)
						const new_val = {
							// if new property then generate a new propertyId
							// otherwise use the existing propertyId by overwriting it
							propertyId: self.crypto.randomUUID(),
							...values,
						};
						// console.log("old values", values, "new values", new_val)
						return new_val;
					},
				},
				fields: [
					{
						label: "Property Id",
						name: "propertyId",
						type: "string",
						uid: true,
						required: true,
						ui: {
							component: wrapFieldsWithMeta(({ field, input, meta }) => {
								// console.log("field", field)
								// console.log("input", input)
								// console.log("meta", eta)
								return (
									<div>
										<input {...input} disabled />
									</div>
								);
							}),
						},
					},
					{
						type: "boolean",
						name: "published",
						label: "Published",
					},
					{
						type: "string",
						name: "title",
						label: "Title",
						isTitle: true,
						required: true,
					},
					{
						type: "image",
						name: "image",
            label: "Cover Image",
            required: true,
					},
					{
						type: "object",
						name: "propertyDetails",
						label: "Property Details",
						fields: [
							{
								type: "number",
								name: "price",
								label: "Listing Price",
							},
							{
								type: "string",
								name: "location",
								label: "Location",
							},
							{
								type: "number",
								name: "beds",
								label: "Number of Bedrooms",
							},
							{
								type: "number",
								name: "baths",
								label: "Number of Bathrooms",
							},
							{
								type: "number",
								name: "garages",
								label: "Number of Garage",
							},
							{
								type: "number",
								name: "size",
								label: "Size(sqft)",
							},
							{
								type: "datetime",
								name: "yearBuilt",
								label: "Year Built",
							},
						],
          },
          {
						label: "Description",
						name: "description",
						type: "rich-text",
            isBody: true,
					},
				],
			},
		],
	},
});
