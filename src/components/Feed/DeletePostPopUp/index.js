import { DeletePopUpContainer } from '../../../style-feed/Posts/layout'
import { TrashIcon } from '../../../style-feed/avatar'

export const DeletePostPopUp = (props) => {

    const deleteButtonHandler = () => {
        props.closePopUp();
        props.deleteHandler();
    }

    return (
        <DeletePopUpContainer>
            <TrashIcon/>
            <h3>Are you sure you want to do this?</h3>
            <div>
                <button onClick={props.closePopUp}>No</button>
                <button onClick={ deleteButtonHandler }>Yes</button>
            </div>
        </DeletePopUpContainer>
    )
}