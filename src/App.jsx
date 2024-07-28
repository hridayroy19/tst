import Banner from "./components/banner/Banner";
import CardSection from "./components/card/CardSection";
import Navbar from "./components/navbar/Navbar";
import NavTow from "./components/navbar/NavTow";

function App() {
  return (
    <>
      <div className=" w-full 2xl:w-[1440px] 2xl:mx-auto  ">
        {/* <Navbar/> */}
        <NavTow/>
        <Banner/>
        <CardSection/>

      </div>
    </>
  );
}

export default App;
