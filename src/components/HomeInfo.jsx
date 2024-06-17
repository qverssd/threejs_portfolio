import { Link } from "react-router-dom";
import { arrow } from '../assets/icons';

const HomeInfo = ({ currentStage }) => {
    if (currentStage === 1)
    return (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I'm
            <span className='font-semibold mx-2 text-white'>Pikanga</span>
            👋
            <br />
            A Software Engineer
        </h1>
    );

    if (currentStage === 2) {
        return (
            <div className='info-box'>
                <p className='font-medium text-center sm:text-x1'>
                Led some projects to success over two years. <br /> What about impact?
                </p>
                <Link to='/projects' className='neo-brutalism-white neo-btn'>
                Visit my portfolio
                <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
                </Link>
            </div>
        );
    }

    if (currentStage === 4) {
        return (
            <div className='info-box'>
                <p className='font-medium sm:text-xl text-center'>
                    Need a project or want to hire a dev? <br /> I'm here!
                </p>
                <Link to='/contact' className='neo-brutalism-white neo-btn'>
                    Talk to me
                    <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
                </Link>
            </div>
        );
    }

    return null;
}

export default HomeInfo;