import { LeftSearchDiv } from '../../../../style-feed/Nav/layout.js';
import { SearchInput } from '../../../../style-feed/Inputs/inputs.js';

const LeftSearchBar = () => {
    return (
        <LeftSearchDiv>
            <i class="fas fa-search fa-lg search-i"/>
            <SearchInput type="text" placeholder="Search posts..."  />
        </LeftSearchDiv>
    )
}

export default LeftSearchBar;