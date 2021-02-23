import { LeftSearchDiv } from '../../../../style-feed/layout.js';

const LeftSearchBar = () => {
    return (
        <LeftSearchDiv>
            <i class="fas fa-search search-i"/>
            <input type="text" placeholder="Search posts..."  />
        </LeftSearchDiv>
    )
}

export default LeftSearchBar;