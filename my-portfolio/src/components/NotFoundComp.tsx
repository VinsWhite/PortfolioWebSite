import Lottie from 'lottie-react';
import notFoundAnimation from '../assets/animations/notFoundAnimation.json'
import { Link } from 'react-router-dom';

export default function NotFoundComp() {
  return (
    <div className="h-full py-20 bg-almostWhite flex flex-col justify-center items-center">
        <Lottie className='w-2/4' animationData={notFoundAnimation} />
        <Link to='/' className='bg-secondary text-white rounded-md px-2 py-1'>Homepage</Link>
    </div>
  )
}
