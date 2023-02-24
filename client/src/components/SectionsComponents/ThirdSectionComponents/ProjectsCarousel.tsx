import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import Project from "../../../model/Project"
import styled from '@mui/material/styles/styled';

const StyledCarousel = styled(Carousel)`
	.carousel {
		&.carousel-slider {
			margin-bottom: 20px;
		}
		
		li.slide {
			&.selected {
				cursor: pointer;
			}
		}
		
		.thumbs-wrapper {
			position: relative;
			margin: 0;

			button.control-arrow {
				background-color: rgba(0,0,0,1);
				opacity: 0.7;
				height: 100%;
				top: 0;
				margin-top: 0;
				
				&:hover {
					opacity: 1;
				} 
 
				&::before {
					transform: scale(1.2);
					display: inline-block;
					animation: pulse 1s infinite!important;
				}
			}

			ul.thumbs {
				padding-left: 0;
				li.thumb {
					opacity: 0.7;
					
					cursor: pointer;
					border: none;
					
					&:hover{
						border: none;
						opacity: 1;
						transform: scale(1.1);
					}

					&.selected {
						transform: scale(1.1);
						opacity: 1;
						border: none;
					}
				}
			}
		}
	}

	@keyframes pulse {
		0% {
			transform: scale(1.2);
		}
		50% {
			transform: scale(1.5);
		}
		100% {
			transform: scale(1.2);
		}
	}

	@media (max-width: 499px) { 
		.thumbs-wrapper {
			ul.thumbs {
				li.thumb {
					width: 120px!important;
				}
			}
		}
    }

	@media only screen and (min-width: 599px) and ( max-width: 899px) {
		.carousel {
			padding: 0 40px
		}

		li.slide {
			img {
				max-height: 370px;
				width: auto;
			}
		}
	}

	@media only screen and (min-width: 599px) and ( max-width: 750px) {
		li.slide {
			img {
				width: 100%;
			}
		}
	}

`
interface Props {
	selectedProject: Project | null,
	projects: Project[],
	onChangeSelectedProject: (projectId: Project['_id']) => void
}

function ProjectsCarousel({ selectedProject, projects, onChangeSelectedProject }: Props) {
	const onClickThumbHandler = (index: number, item: any) => {
		let projectId = item.props['alt'].split('||')[1]

		onChangeSelectedProject(projectId)
	}

	const onClickItemHandler = (index: number, item: any) => {
		let projectUrl = item.props['data-project-url']
		window.open(projectUrl, '_blank', 'noreferrer');
	}

	return (
		<StyledCarousel
			onClickItem={onClickItemHandler}
			onClickThumb={onClickThumbHandler}
			autoPlay={false}
			showStatus={false}
			showIndicators={false}
			showArrows={false}
			swipeable={false}
			thumbWidth={166}
		>
			{
				projects.map(project => {
					return (
						<div key={project._id} data-project-id={project._id} data-project-url={project.url}>
							<img src={`https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/projects-slides/${project.image}`} alt={`${project.title} || ${project._id}`} />
							{/* <p className="legend">{project.title}</p> */}
						</div>
					)
				})
			}


		</StyledCarousel>
	);
}

export default ProjectsCarousel

