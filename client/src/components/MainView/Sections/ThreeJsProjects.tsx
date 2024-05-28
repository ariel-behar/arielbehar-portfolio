import { useEffect } from "react"

interface Props {
  loadSectionHandler: (sectionNum: number) => void
}

function ThreeJsProjects({
  loadSectionHandler
}: Props) {

  useEffect(() => {
    loadSectionHandler(5)
  }, [loadSectionHandler])

  return (
    <div>ThreeJsProjects</div>
  )
}

export default ThreeJsProjects