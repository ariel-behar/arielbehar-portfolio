import React, { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import Project from "../../model/Project"
import styled from '@mui/material/styles/styled';

const StyledCarousel = styled(Carousel)`
	.carousel.carousel-slider {
		margin-bottom: 20px;
	}

	li.slide {
		&.selected {
			cursor: pointer;
		}
	}
	
	li.thumb {
        width: 23%;
        opacity: 0.7;
        cursor: pointer;
		border: none;
		&:hover{
			border: none;
			opacity: 1;
		}

		&.selected {
			transform: scale(1.1);
			opacity: 1;
			border: none;
		}
	}

	.carousel .thumbs-wrapper {
		position: relative;
		margin: 0;

		button.control-arrow {
			background-color: rgba(0,0,0,1);
			height: 100%;
			top: 0;
			margin-top: 0;

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
			{/* {
				selectedProject === null
					? <div key={0}>
						<img src='https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/slides/site-plan.jpg' alt='Site Plan' />
					</div>
					: ''
			} */}

			{
				projects.map(project => {
					return (
						<div key={project._id} data-project-id={project._id} data-project-url={project.url}>
							<img src={`https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/slides/${project.image}`} alt={`${project.projectName} || ${project._id}`} />
							<p className="legend">{project.projectName}</p>
						</div>
					)
				})
			}


		</StyledCarousel>
	);
}

export default ProjectsCarousel

