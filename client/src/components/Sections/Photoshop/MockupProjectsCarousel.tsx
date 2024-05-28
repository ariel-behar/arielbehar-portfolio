import { useState } from "react";
import { v4 as uuid } from 'uuid';
import styled from "@mui/material/styles/styled"


import Carousel, { StateCallBack } from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

import mockupProjects from '../../../data/mockupProjects.json'
import Project from "../../../model/Project";
import MockupProjectCarouselSlide from "./MockupProjectCarouselSlide";
import CarouselStatus from "./CarouselStatus";

const StyledCarousel = styled(Carousel)`
	min-height: 460px;
	height: 100%;
	
	.react-multi-carousel-track  {
		.react-multi-carousel-item {
			height: 300px;

			.slide {
				img {
					height: 100%;
					width: auto;
					max-width: 100%;
				}
			}
		}
	}

	.react-multi-carousel-dot-list  {
		top: 10px;
		bottom: inherit!important;
	}

	.react-multiple-carousel__arrow {
		background: rgba(0,0,0,0);
		&::before {
			font-size: 30px;
			font-weight: bold;
			animation: pulse 1s infinite;
		}
		&:hover {
			background: rgba(0,0,0,0.0);
			&::before {
				font-size: 35px;
				animation: none;
			}
		}
	}

	@keyframes pulse {
		0% {font-size: 30px;}
		50% {font-size: 33px;}
		100% {font-size: 30px;}
	}
`

const responsive = {
	superLargeDesktop: {
		breakpoint: { max: 4000, min: 3000 },
		items: 1
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 1
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 1
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1
	}
};

function MockupProjectsCarousel() {
	const [currentSlide, setCurrentSlide] = useState<number>(1)


	const handleSlideChange = (previousSlide: number, state: StateCallBack) => {
		if(state.currentSlide === 0) {
			setCurrentSlide(1)
		} else if(state.currentSlide > mockupProjects.length + 1) {
			setCurrentSlide(1)
		} else if(state.currentSlide > mockupProjects.length + 2) {
			setCurrentSlide(2)
		} else {
			setCurrentSlide(state.currentSlide -1)
		}
	}

	return (
		<>
			<CarouselStatus currentSlide={currentSlide} totalSlides={mockupProjects.length} />
			<StyledCarousel
				swipeable={true}
				showDots={true}
				responsive={responsive}
				infinite={true}
				autoPlay={true}
				autoPlaySpeed={4000}
				afterChange={handleSlideChange}
			>
				{
					mockupProjects.map((project, index) => {
						return <MockupProjectCarouselSlide
							key={uuid()}
							project={project as Project}
						/>
					})
				}
			</StyledCarousel>
		</>
	)
}

export default MockupProjectsCarousel