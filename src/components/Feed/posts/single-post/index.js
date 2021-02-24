import { PostDiv, TopPartPost, ContentPart, ImagePart, LikeSharePart } from '../../../../style-feed/Posts/layout' 
import someoneImg from '../../../../assets/images/users/jennifer.png'

export const SinglePost = (props) => {

    return (
        <PostDiv>
            <TopPartPost>
                <img src={someoneImg} />
                <p>{ props.name.length > 1 ? props.name : `User ${props.number}` }</p>
                <p>Date</p>
                {/* <p>{ props.time }</p> */}
            </TopPartPost>
            <ContentPart>
                <p>{props.content}</p>
            </ContentPart>
            <ImagePart>
                { props.images.length > 0 ? props.images.map( image => <img src={image.image} alt='Shrimp Man' />) : null }
            </ImagePart>
            <LikeSharePart>
                <p>Like</p>
                <p>Share</p>
                <p>{`${props.likes} ${props.likes > 1 ? 'likes' : 'like'}`}</p>
            </LikeSharePart>
        </PostDiv>
    )
}