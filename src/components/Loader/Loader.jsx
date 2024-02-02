import './Loader.css'
import { ThreeCircles } from 'react-loader-spinner'

export const Loader = () => {
    return (
        <main className="main-loader">
            <ThreeCircles
                visible={true}
                height="100"
                width="100"
                color="#fff"
                ariaLabel="three-circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </main>
    )
}
