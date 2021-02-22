import apple from '../../../assets/svgs/apple.svg';
import googlePlay from '../../../assets/svgs/google.svg';

export const Download = () => {
    return (
        <>
            <button>
                <img src={apple} alt='apple logo' />
            </button>
            <button>
                <img src={googlePlay} alt='google play' />
            </button>
        </>
    )
}