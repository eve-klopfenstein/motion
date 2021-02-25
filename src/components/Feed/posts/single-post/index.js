import React from 'react';
import { PostDiv, TopPartPost, ContentPart, ImagePart, LikeSharePart,UserTimeWrapper, SubLikeShare, LikesAmountP, NameDiv, TimeDiv } from '../../../../style-feed/Posts/layout' 
import { Avatar } from '../../../../style-feed/avatar'
import tuna from '../../../../assets/images/tuna.jpg'
import like from '../../../../assets/svgs/heart.svg'
import share from '../../../../assets/svgs/share.svg'
import Moment from 'react-moment';
import { connect } from 'react-redux';

export class SinglePost extends React.Component {

    state = {
        content: ''
    }

    likeHandler = () => {

        console.log(this.props.token)
        
        this.setState({
            content: this.props.content
        })
        const url = `https://motion.propulsion-home.ch/backend/api/social/posts/toggle-like/${this.props.postID}/`
        const config = {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.props.token}`
            })
        }
        
        fetch(url, config)
            .then( res => res.json() )
            .then( data => {
                console.log(this.props.token)
            })
    }

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
                            <button onClick={this.likeHandler}>
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