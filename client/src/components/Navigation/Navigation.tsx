import logo from '../../assets/img/logo/logo.png'

import styled from "@mui/material/styles/styled"

import Box from "@mui/material/Box"
import Link from "@mui/material/Link"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import { motion } from 'framer-motion'

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
            component={motion.div}
            animate={showMainView ? { opacity: 1 } : {}}
            transition={showMainView ? { delay: 2.2, duration: 0.5 } : {}}
        >
            <StyledBox component={'nav'} >
                <List className='nav-list'>
                    <ListItem className="nav-item">
                        <img src={logo} alt="Logo" height="35px" width="35px" />
                    </ListItem>
                    <ListItem className="nav-item">
                        <Link className="nav-link" href="#first-section">INTRO</Link>
                    </ListItem>
                    <ListItem className="nav-item">
                        <Link className="nav-link" href="#second-section">ABOUT</Link>
                    </ListItem>
                    <ListItem className="nav-item">
                        <Link className="nav-link" href="#third-section">PROJECTS</Link>
                    </ListItem>
                    <ListItem className="nav-item">
                        <Link className="nav-link" href="#fifth-section">SKILLS</Link>
                    </ListItem>
                    <ListItem className="nav-item">
                        <Link className="nav-link" href="#fifth-section">RESUME</Link>
                    </ListItem>
                    <ListItem className="nav-item">
                        <Link className="nav-link" href="#sixth-section">CONTACT</Link>
                    </ListItem>
                    <ListItem className="nav-item">
                        <Link className="nav-link" href="#bonus">BONUS</Link>
                    </ListItem>
                </List>
            </StyledBox>
        </Box>
    )
}

export default Navigation