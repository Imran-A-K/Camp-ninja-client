import PopularClasses from "./PopularClasses"
import PopularInstructors from "./PopularInstructors"
import Slider from "./Slider/Slider"
import Support from "./Support"

const Home = () => {
  return (
    <div>
      
        <Slider />
        <PopularClasses />
        <PopularInstructors />
        <Support />
    </div>
  )
}

export default Home