import "./App.css"
import CusBar from "./components/CusBar"
import Particle from "./components/Particle"
import { Title } from "./utils/GeneralFunction"
function App() {
  Title("Archive Azathoth")
  return (
    <>
      <div>
        <Particle />
        <CusBar />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1 className="text-center text-danger">Welcome To My Area</h1>
      </div>
    </>
  )
}

export default App
