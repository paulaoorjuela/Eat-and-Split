import Friend from "./Friend"

export default function FriendsList({friends, onSelectFriend, selectedFriend, onDeleteFriend}){
    return(
        <ul>
            {friends.map((friend) => (
                <Friend 
                    friend={friend} 
                    key={friend.id} 
                    onSelectFriend={onSelectFriend} 
                    selectedFriend={selectedFriend} 
                    onDeleteFriend={onDeleteFriend}/>
            ))}
        </ul>
    )
}