import { useState } from 'react'
import HomeView from './HomeView'
import MainView from './MainView'

function RootView() {
    const [showMainView, setShowMainView] = useState<boolean>(false)

    const showMainViewHandler = () => {
        setShowMainView(true)
    }

    return (
        <>
            {/* <div>RootView</div> */}
            {
                !showMainView 
                ? <HomeView showMainViewHandler={showMainViewHandler} />
                : <MainView />
            }
            
        </>
    )
}

export default RootView