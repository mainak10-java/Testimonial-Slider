import {FaQuoteLeft , FaQuoteRight} from 'react-icons/fa';

const Card = (props) =>{
    let review=props.review;

    return(
        <div className='md:relative flex flex-col'>
            <div className='absolute top-[-7rem] mx-auto z-[10]'>
                <img className='aspect-square rounded-full w-[140px] h-[140px]'
                src={review.image} alt='img'/>
                <div className='w-[140px] h-[140px] bg-violet-500 rounded-full top-[-6px] left-[10px] absolute z-[-10]'></div>
            </div>

            <div className='text-center mt-7'>
                <p className='font-bold text-2xl capitalize tracking-wider'>{review.name}</p>
                <p className='text-violet-300 uppercase text-sm'>{review.job}</p>
            </div>

            <div className='text-violet-400 mx-auto mt-5'>
                <FaQuoteLeft/>
            </div>

            <div className='text-center mt-4 text-slate-500'>
                <p>{review.text}</p>
            </div>

            <div className='text-violet-400 mx-auto mt-5'>
                <FaQuoteRight/>
            </div>

        </div>
    );
}

export default Card;