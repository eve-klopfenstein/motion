import React from 'react';
import { PostDiv, TopPartPost, ContentPart, ImagePart, LikeSharePart,UserTimeWrapper, SubLikeShare, LikesAmountP, NameDiv, TimeDiv } from '../../../../style-feed/Posts/layout' 
import { LikeIcon, LikeIconClicked, ShareIcon } from '../../../../style-feed/button'
import { Avatar } from '../../../../style-feed/avatar'
import tuna from '../../../../assets/images/tuna.jpg'
import like from '../../../../assets/svgs/heart.svg'
import share from '../../../../assets/svgs/share.svg'
import Moment from 'react-moment';
import { connect } from 'react-redux';

class SinglePost extends React.Component {

    render() {
        return (
            <PostDiv>
                <TopPartPost>
                    <Avatar src={ this.props.avatar ? this.props.avatar : tuna } />
                    <UserTimeWrapper>
                        <NameDiv>
                            <p>{ this.props.name.length > 1 ? this.props.name : `User ${this.props.number}` }</p>
                        </NameDiv>
                        <TimeDiv>
                            <p>
                               <Moment fromNow>{this.props.time}</Moment>
                            </p>
                        </TimeDiv>
                    </UserTimeWrapper>
                </TopPartPost>
                <ContentPart>
                    <p>{ this.props.content }</p>
                </ContentPart>
                <ImagePart>
                    { this.props.images.length > 0 ? this.props.images.map( image => <img src={image.image} alt='Shrimp Man' />) : null }
                </ImagePart>
                <LikeSharePart>
                    <SubLikeShare>
                        <div>
                            <button onClick={this.props.onClick}>
                                { this.props.likedByMe ? <LikeIconClicked/> : <LikeIcon/> }
                            </button>
                            <p>Like</p>
                        </div>
                        <div>
                            <button>
                                <ShareIcon src={share} />
                            </button>
                            <p>Share</p>
                        </div>
                    </SubLikeShare>
                    <LikesAmountP>{`${this.props.likes} ${this.props.likes > 1 ? 'likes' : 'like'}`}</LikesAmountP>
                </LikeSharePart>
            </PostDiv>
        )
    }
}

const mapStateToProps = state => {
    return {
        token: state.token
    }
}

export default connect(mapStateToProps)(SinglePost);