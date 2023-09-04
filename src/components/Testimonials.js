import { useState } from "react";
import Card from "./Card";
import {FaChevronLeft ,FaChevronRight} from 'react-icons/fa';

const Testimonials = (props) =>{
    let reviews= props.reviews;
    const [index, setIndex]= useState(0);

    function leftClickHandler(){
        if(index - 1 < 0) {
            setIndex(reviews.length - 1);
        }
        else {
            setIndex(index - 1);
        }
    }

    function rightClickHandler(){
  
        if(index + 1 >= reviews.length){
            setIndex(0);
        }
        else{
            setIndex(index+1);
        }
    }

    function randomHandler(){
        let rand= Math.floor(Math.random() * reviews.length);
        setIndex(rand);
    }

    return(
        <div className="w-[85vw] md:w-[700px] flex flex-col bg-white justify-center items-center mt-10 p-10 rounded-md
        transition-all duration-700 hover:shadow-xl">
            <Card review={reviews[index]}/>

            <div className="flex text-2xl gap-4 text-violet-400 mt-5 font-bold mx-auto">
                <button onClick={leftClickHandler} className=" hover:text-violet-500">
                    <FaChevronLeft/>
                </button>

                <button onClick={rightClickHandler} className=" hover:text-violet-500">
                    <FaChevronRight/>
                </button>
            </div>

            <div className="mt-5 mx-auto bg-violet-400 text-white cursor-pointer px-10 py-2 rounded-md hover:bg-violet-500 
            transition-all duration-200 font-bold text-lg">
                <button onClick={randomHandler}>Surprise Me</button>
            </div>
        </div>
    );
}


export default Testimonials;