import {Link as ScrollLink} from 'react-scroll'
import { motion } from 'framer-motion'

import styled from "@mui/material/styles/styled"

import Box from "@mui/material/Box"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"


const StyledBox = styled(Box)`
    background-color: rgba(0, 0, 0, 0.5);
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;

    &:hover {
        background-color: rgba(0, 0, 0, 0.8);
    }

    .nav-list {
        .nav-item {
            &:first-of-type {
                width: 100%;
                img {
                    margin: 0 auto;
                }
            }
            .nav-link {
                color: ${(({ theme }) => theme.palette.text.tertiary)};
                text-decoration: none;

                cursor: pointer;

                &.active {
                    color: ${(({ theme }) => theme.palette.text.secondary)};
                }

                &:hover {
                    color: ${(({ theme }) => theme.palette.text.secondary)};
                }
            }
        }
    }
`

interface Props {
    showMainView: boolean
}

function Navigation({showMainView}: Props) {
    return (
        <Box
            style={{ 
                opacity: 0, 
                position: "fixed",
                right: 0,
                top: "15%",
                zIndex: 5
             }}
            component={motion.nav}
            animate={showMainView ? { opacity: 1 } : {}}
            transition={showMainView ? { delay: 2.2, duration: 0.5 } : {}}
        >
            <StyledBox component={'nav'} >
                <List className='nav-list'>
                    <ListItem className="nav-item">
                        <img src='https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/logo/logo.png' alt="Logo" height="35px" width="35px" />
                    </ListItem>
                    <ListItem className="nav-item">
                        <ScrollLink className="nav-link" to="first-section" spy={true} smooth={true} offset={0} duration={500}>INTRO</ScrollLink>
                    </ListItem>
                    <ListItem className="nav-item">
                        <ScrollLink className="nav-link" to="second-section" spy={true} smooth={true} offset={0} duration={500}>ABOUT</ScrollLink>
                    </ListItem>
                    <ListItem className="nav-item">
                        <ScrollLink className="nav-link" to="projects-photoshop-container-section" spy={true} smooth={true} offset={0} duration={500}>PROJECTS</ScrollLink>
                    </ListItem>
                    <ListItem className="nav-item">
                        <ScrollLink className="nav-link" to="fifth-section" spy={true} smooth={true} offset={-30} duration={500}>SKILLS</ScrollLink>
                    </ListItem>
                    <ListItem className="nav-item">
                        <ScrollLink className="nav-link" to="sixth-section" spy={true} smooth={true} offset={-50} duration={500}>RESUME</ScrollLink>
                    </ListItem>
                    <ListItem className="nav-item">
                        <ScrollLink className="nav-link" to="seventh-section" spy={true} smooth={true} offset={0} duration={500}>CONTACT</ScrollLink>
                    </ListItem>
                    <ListItem className="nav-item">
                        <ScrollLink className="nav-link" to="eight-section" spy={true} smooth={true} offset={0} duration={500}>BONUS</ScrollLink>
                    </ListItem>
                </List>
            </StyledBox>
        </Box>
    )
}

export default Navigation