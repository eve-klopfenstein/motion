import twitter from '../../../assets/svgs/twitter_icon.svg'
import facebook from '../../../assets/svgs/facebook_icon.svg'
import instagram from '../../../assets/svgs/instagram_icon.svg'

export const SocialMedia = () => {
    return (
        <div>
            <button>
                <img src={twitter} alt='Twitter Icon' />
            </button>
            <button>    
                <img src={facebook} alt='Facebook Icon' />
            </button>
            <button>
                <img src={instagram} alt='Instagram Icon' />
            </button>
            <p>Motion 2018. All rights reserved.</p>
        </div>
    )
}