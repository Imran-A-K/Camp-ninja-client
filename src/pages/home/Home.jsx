import Blog from "./Blog/Blog"
import PopularInstructors from "./PopularInstructors"
import Slider from "./Slider/Slider"
import Support from "./Support"

const Home = () => {
  return (
    <div>
        <Slider />
        <PopularInstructors />
        <Support />
    </div>
  )
}

export default Home