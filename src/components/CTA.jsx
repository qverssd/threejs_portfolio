import { Link } from 'react-router-dom';

const CTA = () => {
    return (
        <section className='cta'>
            <p className='cta-text'>
                Have a projecton your mind? <br className='sm:block-hidden' />
                Contact me, let's work together!
            </p>
            <Link to='/contact' className='btn'>
                Contact
            </Link>
        </section>
    );
};

export default CTA;