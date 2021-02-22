import apple from '../../../../assets/svgs/apple.svg';
import googlePlay from '../../../../assets/svgs/google.svg';
import { DownloadButton } from '../../../../style/buttons'
import { DownloadContainer } from '../../../../style/layout'

export const Download = () => {
    return (
        <DownloadContainer>
            <DownloadButton>
                <img src={apple} alt='apple logo' />
            </DownloadButton>
            <DownloadButton>
                <img src={googlePlay} alt='google play' />
            </DownloadButton>
        </DownloadContainer>
    )
}