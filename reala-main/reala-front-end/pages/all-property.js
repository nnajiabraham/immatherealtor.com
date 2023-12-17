import { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import client from "../tina/__generated__/client";
import Layout from "../components/global/layout";
import { API_URL } from "../config";
import AllPropertyNav from "../components/all-property-nav";
import PropertyCard from "../components/property-card";
import ProductListCard from "../components/product-list-card";
import InnerPageLayout from "../components/inner-page-layout";
import Pagination from "../components/pagination";

const mockProperty = (title) => ({
	id: Math.random().toString(36).substring(2, 9) + title,
	attributes: {
		image: "/images/404.jpg",
		price: 2009999,
		slug: "property-slug",
		title: title,
		location: "123 Main St, New York, NY 10030",
		phone: "123-456-7890",
		beds: 3,
		baths: 2,
		propertyType: "Apartment",
		type: "Sale",
		rating: 4,
		categories: {
			data: [
				{
					attributes: {
						categoryname: "sale",
					},
				},
			],
		},
	},
});

const AllProperty = ({
	propertyList,
	propertyTotalCount,
}) => {
	const data = propertyList ?? [];
	// const { data } = property;
	const [view, setView] = useState(false);
	// console.log("propertyListData ", propertyListData)
	// console.log("propertyTitles ", propertyTitles)
	console.log("propertyTotalCount ", propertyTotalCount);

	const searchProperty = () => {
		var searchKeyword, i, txtValue;
		let input = document.getElementById("search-input");
		let filter = input.value.toUpperCase();
		let allProperty = document.getElementById("property-list");
		let property = allProperty.getElementsByClassName("property");

		for (i = 0; i < property.length; i++) {
			searchKeyword = property[i].getElementsByClassName("property-name")[0];
			txtValue = searchKeyword.textContent || searchKeyword.innerText;

			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				property[i].style.display = "";
			} else {
				property[i].style.display = "none";
			}
		}
	};

	// Pagination
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(6);

	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const propertyData = data?.slice(indexOfFirstPost, indexOfLastPost);

	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	return (
		<Layout>
			<InnerPageLayout title="Property Listings" />
			<div className="all-property featured-list section-padding">
				<div className="container">
					<AllPropertyNav
						setView={setView}
						searchProperty={searchProperty}
						view={view}
						data={data}
					/>
					<div id="property-list">
						{view ? (
							<>
								<div className="row">
									{data === null && (
										<span className="error">Property not available</span>
									)}
									{propertyData?.map((property) => (
										<ProductListCard property={property} key={property.id} />
									))}
								</div>
								{data.length > 6 ? (
									<Pagination
										postsPerPage={postsPerPage}
										totalPosts={data?.length}
										paginate={paginate}
									/>
								) : (
									""
								)}
							</>
						) : (
							<>
								<div className="row">
									{data === null || undefined || 0 ? (
										<span className="error">Property not available</span>
									) : null}
									{propertyData?.map((property) => (
										<PropertyCard property={property} key={property.id} />
									))}
								</div>
								{data.length > 6 ? (
									<Pagination
										postsPerPage={postsPerPage}
										totalPosts={data?.length}
										paginate={paginate}
									/>
								) : (
									""
								)}
							</>
						)}
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default AllProperty;

export const getStaticProps = async ({ params }) => {
	const propertyListData = await client.queries.propertyConnection();
	const propertyTotalCount =
		propertyListData.data.propertyConnection.totalCount;
	const propertyList = propertyListData.data.propertyConnection.edges.map(
		(prop) => ({
			propertyId: prop.node.propertyId,
			published: prop.node.published,
			title: prop.node.title,
			image: prop.node.image,
			slug: prop.node._sys.filename,
			price: prop.node.propertyDetails.price,
			location: prop.node.propertyDetails.location,
			beds: prop.node.propertyDetails.beds,
			baths: prop.node.propertyDetails.baths,
			size: prop.node.propertyDetails.size,
		})
	);

	console.log(propertyList);

	return {
		props: {
			propertyList,
			propertyTotalCount: propertyTotalCount ?? 0,
		},
	};
};
