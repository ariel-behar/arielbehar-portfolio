import { useEffect } from "react"

interface Props {
  loadSectionHandler: (sectionNum: number) => void
}

function ThreeJsSection({
  loadSectionHandler
}: Props) {

  useEffect(() => {
    loadSectionHandler(5)
  }, [loadSectionHandler])

  return (
    <div>ThreeJsProjects</div>
  )
}

export default ThreeJsSection