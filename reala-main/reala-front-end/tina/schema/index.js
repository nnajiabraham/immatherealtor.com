import React from "react";
import { defineConfig, wrapFieldsWithMeta } from "tinacms";

const schemas = {
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
				// This is an DEMO router. You can remove this to fit your site
				router: ({ document }) => `/property/${document._sys.filename}`,
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
					label: "Image Gallery",
					name: "gallery",
					type: "object",
					list: true,
					ui: {
						itemProps: (item) => {
							// Field values are accessed by item?.<Field name>
							return { label: item?.image };
            },
            component: wrapFieldsWithMeta(({ field, input, meta }) => {
							console.log("field", field)
							console.log("input", input)
							console.log("meta", meta)
              
							return (
                <div style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "5px"
                }}>
                  {
                    input.value.map((item, index) => {
                      return (
                        <div key={index} onChange={input.onChange}>
                          <img src={item.image} width={40} height={40}/>
                          <button onClick={() => input.remove(index)}>Remove</button>
                        </div>
                      )
                    })
                  }
								</div>
							);
						}),
					},
					fields: [
						{ label: "Image", name: "image", type: "image" }
					],
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
};

export default schemas;
