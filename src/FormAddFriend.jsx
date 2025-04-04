import Button from "./Button";

export default function FormAddFriend({ onAddFriend }) {
    return(
        <form  className='form-add-friend' action="">
            <label htmlFor="name">Friend Name</label>
            <input type="text" id="name" />

            <label htmlFor="image">image URL</label>
            <input type="text" id="image" />
            <Button>Add friend</Button>

        </form>
    )
}