import Button from "./Button";

export default function Friend({ friend, onSelectFriend, selectedFriend, onDeleteFriend }) {
    const isSelected = selectedFriend?.id === friend.id;
    return <li className={isSelected ? "selected" : ""}>
        <img src={friend.image} alt={friend.name} />
        <h3>{friend.name}</h3>
        {friend.balance < 0 && <p className="red">You owe {friend.name} {Math.abs(friend.balance)}$</p>}
        {friend.balance > 0 && <p className="green">{friend.name} owes you {Math.abs(friend.balance)}$</p>}
        {friend.balance === 0 && <p>You and {friend.name} are even</p>}
        <div className="button-container">
            <Button onClick={() => onSelectFriend(friend)} color="primary">
                {isSelected? 'Close' : 'Select'}
            </Button>
            <Button onClick={() => onDeleteFriend(friend.id)} color="danger">
                Delete
            </Button>
        </div>
        </li>;
}
