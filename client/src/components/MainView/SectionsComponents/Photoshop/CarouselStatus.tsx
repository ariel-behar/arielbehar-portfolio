import Box from "@mui/material/Box"

import Typography from "@mui/material/Typography"
import IProject from "../../../../model/Project"

interface Props {
    currentSlide: number,
    totalSlides: number
}

function CarouselStatus({
    currentSlide,
    totalSlides
}: Props) {
    return (
        <Typography variant="body1" component={"p"} sx={{
            position: "absolute",
            top: "5px",
            right: "10px",
            padding: "5px",
            fontSize: "16px",
            textShadow: "1px 1px 1px rgba(0, 0, 0, 0.9)",
            color: "#fff"
        }} >
            {currentSlide} of {totalSlides}
        </Typography>
    )
}

export default CarouselStatus