import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import styled from "@mui/material/styles/styled"
import Typography from "@mui/material/Typography";
import Carousel from "react-multi-carousel";
// import { Carousel } from "react-responsive-carousel"
// import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import mockupProjects from '../../data/mockupProjects.json'

const StyledCarousel = styled(Carousel)`
	height: 100%;
	
	.react-multi-carousel-track  {
		
		.react-multi-carousel-item {
			height: 300px;

			.slide {
				a {
					height: 100%;
					width: auto;
					img {
						height: 100%;
						width: auto;
					}
				}

				p {
					color: aliceblue;
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

	return (
		<>
			<StyledCarousel
				swipeable={true}
				showDots={true}
				responsive={responsive}
				infinite={true}
				autoPlay={true}
				autoPlaySpeed={4000}
			>
				{
					mockupProjects.map(project => {
						return (
							<Stack
								className="slide"
								key={project._id}
								data-project-id={project._id}
								data-project-url={project.url}
								direction='column'
								justifyContent='center'
								alignItems='center'
								height='100%'
								mt={2}
								pb={1}

							>
								<Link href="#">
									<img src={`https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/mockup-projects/${project.image}`} alt={`${project.projectName} || ${project._id}`} />
								</Link>

								<Typography mt={2} mb={1} variant="h5" component='p'>{project.projectName}</Typography>

								<Stack direction='row' justifyContent='center'>
									<Typography variant="h6" component='p'>
										<Link href={project.url} style={{ textDecoration: 'none' }}>Project Description</Link>
									</Typography>
									<Typography variant="h6" component='p'>&nbsp;|&nbsp;</Typography>
									<Typography variant="h6" component='p'>
										<Link href={project.url} target="_blank" style={{ textDecoration: 'none' }} >Visit Project's Site</Link>
									</Typography>
								</Stack>
							</Stack>

						)
					})
				}


			</StyledCarousel>

		</>
	)
}

export default MockupProjectsCarousel