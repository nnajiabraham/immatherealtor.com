	import { useRouter } from "next/router";
import Skeleton from "react-loading-skeleton";
import client from "../../tina/__generated__/client";
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import { useTina } from "tinacms/dist/react";
import Layout from "../../components/global/layout";
import PropertyCard from "../../components/property-card";
import { API_URL } from "../../config";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import SectionTitle from "../../components/global/section-title";
import {
	MdBed,
	MdOutlineKeyboardArrowLeft,
	MdOutlineNavigateNext,
} from "react-icons/md";
import { GiBathtub, GiMechanicGarage } from "react-icons/gi";
import { AiFillStar, AiOutlineHome } from "react-icons/ai";
import { BsCheckCircle } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import {
	FaFacebookF,
	FaInstagram,
	FaTwitter,
	FaWhatsapp,
	FaVoteYea,
} from "react-icons/fa";
import md from "markdown-it";

const PropertyPage = ({ /*property, relatedProperty,*/ tinaPropertyData, relatedProperty }) => {


	const { data } = useTina(tinaPropertyData);
	const property = data.property;
	const router = useRouter();

	if (property.published === false && process.env.NODE_ENV === 'production') {
	// if (property.published === false && true) {
		router.push("/404");
	}


	const propertyInfo = {
		propertyId: property.propertyId,
		published: property.published,
		title: property?.title ?? "",
		image: property?.image ?? "/images/404.jpg",
		description: property?.description ?? "",
		price: property?.propertyDetails?.price?.toLocaleString() ?? 0,
		location: property?.propertyDetails?.location ?? "",
		beds: property?.propertyDetails?.beds ?? 0,
		baths: property?.propertyDetails?.baths ?? 0,
		garages: property?.propertyDetails?.garages ?? 0,
		size: property?.propertyDetails?.size?.toLocaleString() ?? 0,
		yearBuilt: property?.propertyDetails?.yearBuilt ?? 0,
	}

	const {
    // image,
    description,
		price,
		title,
		location,
		beds,
		baths,
    size,
    yearBuilt,
    garages,
  } = propertyInfo;
  
	const image = null;

	return (
		<Layout title={title}>
			{property === null ? (
				<div className="loader">
					<Skeleton />
				</div>
			) : (
				<div className="single-page">
					<div className="rwo">
						<div className="col-12">
							<Swiper
								className="single-page__swiper"
								modules={[Navigation, Autoplay]}
								spaceBetween={10}
								autoplay
								navigation={{
									prevEl: ".prev",
									nextEl: ".next",
								}}
								breakpoints={{
									576: {
										slidesPerView: 2,
									},
									992: {
										slidesPerView: 3,
									},
									1200: {
										slidesPerView: 4,
									},
								}}
							>
								{image === null ? "Image not available" : ""}
								{image?.data.map((images) => (
									<SwiperSlide key={images.id}>
										<img
											className="img-fluid"
											src={`${API_URL}${images.attributes.url}`}
											alt={title}
										/>
									</SwiperSlide>
								))}
							</Swiper>
							<div className="prev">
								<MdOutlineKeyboardArrowLeft />
							</div>
							<div className="next">
								<MdOutlineNavigateNext />
							</div>
						</div>
					</div>
					<div className="container">
						<div className="single-page__top">
								<h3>
									{title}
								{/* {title} <span>{"propertyType"}</span> */}
							</h3>
							<span className="price">${price}</span>
							<ul>
								<li>
									<GoLocation /> {location}
								</li>
							</ul>
						</div>
					</div>
					<div className="section-bg section-padding">
						<div className="container">
							<div className="row">
								<div className="col">
									<div className="description-card">
										<div className="description-card__header">
											<h4>Property Details</h4>
										</div>
										<div className="description-card__body">
											<ul>
												<li>
													<span>
														<MdBed />
														Beds
													</span>{" "}
													<span>{beds}</span>
												</li>
												<li>
													<span>
														<GiBathtub />
														Bathrooms
													</span>{" "}
													<span>{baths}</span>
												</li>
												<li>
													<span>
														<AiOutlineHome />
														Area (sq ft)
													</span>{" "}
													<span>{size}</span>
												</li>
												<li>
													<span>
														<GiMechanicGarage />
														Garages
													</span>{" "}
													<span>{garages}</span>
												</li>
												<li>
													<span>
														<FaVoteYea />
														Year Built
													</span>{" "}
													<span>
														{new Date(yearBuilt).toLocaleDateString("en-US")}
													</span>
												</li>
											</ul>
										</div>
									</div>
									{description === null ? (
										""
									) : (
										<div className="description-card">
											<div className="description-card__header">
												<h4>Description</h4>
											</div>
											<div className="description-card__body">
                        <div>
                          <TinaMarkdown content={description} />
                        </div>
											</div>
										</div>
									)}

									{/* {propertyFeature === null ? (
										""
									) : (
										<div className="description-card">
											<div className="description-card__header">
												<h4>Property Features</h4>
											</div>
											<div className="description-card__body features">
												<ul>
													{propertyFeature.map((features) => (
														<li key={features.id}>
															<span>
																<BsCheckCircle /> {features.feature}
															</span>
														</li>
													))}
												</ul>
											</div>
										</div>
									)} */}
								</div>
								{/* <div className="col-md-4">
									<div className="description-sidebar">
										<div className="description-sidebar__header">
											<h4>Property Owner</h4>
										</div>
										<div className="description-sidebar__body">
											<h4 className="username">
												{user.data.attributes.username}
											</h4>
											<p className="mb-0">{user.data.attributes.whatsApp}</p>
											<p>{user.data.attributes.email}</p>
											<ul>
												<li>
													<a
														href={user.data.attributes.facebook}
														className="icon"
													>
														<FaFacebookF />
													</a>
												</li>
												<li>
													<a
														href={user.data.attributes.twitter}
														className="icon"
													>
														<FaTwitter />
													</a>
												</li>
												<li>
													<a
														href={user.data.attributes.instagram}
														className="icon"
													>
														<FaInstagram />
													</a>
												</li>
												<li>
													<a
														href={`tel:${user.data.attributes.whatsApp}`}
														className="icon"
													>
														<FaWhatsapp />
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div> */}
							</div>
						</div>
					</div>
					<div className="similar">
						<div className="featured-list section-padding">
							<div className="container">
								<SectionTitle position="left" title="Similar Properties" />
								<div className="featured-listing__wrapper">
									<div className="row">
										{relatedProperty?.map((property) => (
											<PropertyCard key={property.id} property={property}/>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</Layout>
	);
};

export default PropertyPage;

export const getStaticProps = async ({ params }) => {
	const tinaPropertyData = (
		await client.queries.property({ relativePath: `${params.slug}.md` })
	);

	const property = tinaPropertyData.data.property;

	const allProperties = await client.queries.propertyConnection();
	const threeRandomProperties = allProperties.data.propertyConnection.edges
		.sort(() => Math.random() - Math.random())
		.slice(0, 3);

	const relatedProperty = threeRandomProperties
		.filter((prop) => prop.node.published)
		.map((prop) => ({
		propertyId: prop.node.propertyId,
		published: prop.node.published,
		title: prop.node?.title ?? "",
		image: prop.node?.image ?? "/images/404.jpg",
		description: prop.node?.description ?? "",
		price: prop.node?.propertyDetails?.price?.toLocaleString() ?? 0,
		location: prop.node?.propertyDetails?.location ?? "",
		beds: prop.node?.propertyDetails?.beds ?? 0,
		baths: prop.node?.propertyDetails?.baths ?? 0,
		garages: prop.node?.propertyDetails?.garages ?? 0,
		size: prop.node?.propertyDetails?.size?.toLocaleString() ?? 0,
		yearBuilt: prop.node?.propertyDetails?.yearBuilt ?? 0,
		slug: prop.node._sys.filename,
	}));

	return {
		props: {
			tinaPropertyData,
      property: {
        propertyId: property.propertyId,
        published: property.published,
        title: property?.title ?? "",
        image: property?.image ?? "/images/404.jpg",
        description: property?.description ?? "",
        price: property?.propertyDetails?.price?.toLocaleString() ?? 0,
        location: property?.propertyDetails?.location ?? "",
        beds: property?.propertyDetails?.beds ?? 0,
        baths: property?.propertyDetails?.baths ?? 0,
        garages: property?.propertyDetails?.garages ?? 0,
        size: property?.propertyDetails?.size?.toLocaleString() ?? 0,
        yearBuilt: property?.propertyDetails?.yearBuilt ?? 0,
			},
			relatedProperty: relatedProperty,
		},
	};
};

export const getStaticPaths = async ({ params }) => {
	const propertyListData = await client.queries.propertyConnection();
	const paths = propertyListData.data.propertyConnection.edges.map((prop) => ({
		params: {
			slug: prop.node._sys.filename,
		},
	}));

	return {
		paths,
		fallback: false,
	};
};
