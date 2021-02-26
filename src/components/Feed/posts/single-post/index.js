import React from 'react';
import { PostDiv, TopPartPost, ContentPart, ImagePart, LikeSharePart,UserTimeWrapper, SubLikeShare, LikesAmountP, NameDiv, TimeDiv } from '../../../../style-feed/Posts/layout' 
import { LikeIcon, LikeIconClicked, ShareIcon, PopupButton } from '../../../../style-feed/button'
import { Avatar } from '../../../../style-feed/avatar'
import tuna from '../../../../assets/images/tuna.jpg'
import Moment from 'react-moment';
import menuIcon from '../../../../assets/svgs/menu.svg'

export const SinglePost = props => {

        const toggleDeletePopUp = () => {
            props.setShowDeletePopUp(!props.showDeletePopUp)
        }

        return (
            <PostDiv>
                <TopPartPost>
                    <Avatar src={ props.avatar ? props.avatar : tuna } />
                    <UserTimeWrapper>
                        <NameDiv>
                            <p>{ props.name.length > 1 ? props.name : `User ${props.number}` }</p>
                        </NameDiv>
                        <TimeDiv>
                            <p>
                            <Moment fromNow>{props.time}</Moment>
                            </p>
                        </TimeDiv>
                    </UserTimeWrapper>
                    { props.postedByMe ? 
                        <PopupButton onClick={toggleDeletePopUp}>
                            <img src={menuIcon} alt='Menu Icon'/>
                        </PopupButton>             
                        : null
                    }
                </TopPartPost>
                <ContentPart>
                    <p>{ props.content }</p>
                </ContentPart>
                <ImagePart>
                    { props.images.length > 0 ? props.images.map( image => <img src={image.image} alt='Shrimp Man' />) : null }
                </ImagePart>
                <LikeSharePart>
                    <SubLikeShare>
                        <div>
                            <button onClick={ props.onClick } >
                                { props.likedByMe ? <LikeIconClicked/> : <LikeIcon/> }
                            </button>
                            <p>Like</p>
                        </div>
                        <div>
                            <button>
                                <ShareIcon/>
                            </button>
                            <p>Share</p>
                        </div>
                    </SubLikeShare>
                    <LikesAmountP>{ `${ props.likes } ${ props.likes > 1 ? 'likes' : 'like'}` }</LikesAmountP>
                </LikeSharePart>
            </PostDiv>
        )
}
