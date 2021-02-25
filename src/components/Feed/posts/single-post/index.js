import { PostDiv, TopPartPost, ContentPart, ImagePart, LikeSharePart,UserTimeWrapper, SubLikeShare, LikesAmountP, NameDiv, TimeDiv } from '../../../../style-feed/Posts/layout' 
import { Avatar } from '../../../../style-feed/avatar'
import tuna from '../../../../assets/images/tuna.jpg'
import like from '../../../../assets/svgs/heart.svg'
import share from '../../../../assets/svgs/share.svg'

export const SinglePost = (props) => {

    return (
        <PostDiv>
            <TopPartPost>
                <Avatar src={ props.avatar ? props.avatar : tuna } />
                <UserTimeWrapper>
                    <NameDiv>
                        <p>{ props.name.length > 1 ? props.name : `User ${props.number}` }</p>
                    </NameDiv>
                    <TimeDiv>
                        <p>Time</p>
                    </TimeDiv>
                </UserTimeWrapper>
                {/* <p>{ props.time }</p> */}
            </TopPartPost>
            <ContentPart>
                <p>{props.content}</p>
            </ContentPart>
            <ImagePart>
                { props.images.length > 0 ? props.images.map( image => <img src={image.image} alt='Shrimp Man' />) : null }
            </ImagePart>
            <LikeSharePart>
                <SubLikeShare>
                    <div>
                        <button>
                            <img src={like} />
                        </button>
                        <p>Like</p>
                    </div>
                    <div>
                        <button>
                            <img src={share} />
                        </button>
                        <p>Share</p>
                    </div>
                </SubLikeShare>
                <LikesAmountP>{`${props.likes} ${props.likes > 1 ? 'likes' : 'like'}`}</LikesAmountP>
            </LikeSharePart>
        </PostDiv>
    )
}