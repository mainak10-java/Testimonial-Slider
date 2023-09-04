import React from "react";
import reviews from './data';
import Testimonials from "./components/Testimonials";


const App = () => {
  return(
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center mx-auto bg-gray-200">
        <div className="text-center">
            <h1 className="text-4xl font-bold">Our Testimonials</h1>
            <div className="w-1/5 h-[4px] bg-violet-400 mx-auto mt-2"></div>
            <Testimonials reviews={reviews}/>
        </div>
    </div>
  );
};

export default App;
