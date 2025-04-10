import { useEffect, useState } from "react";
import Button from "./Button";
import FormAddFriend from "./FormAddFriend";
import FormSplitBill from "./FormSplitBill";
import FriendsList from "./FriendsList";

// Initialize state from localStorage
const initialFriends = () => {
  try {
    const stored = localStorage.getItem("friends");
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

// const initialFriends = [
//   {
//     id: 118836,
//     name: "Clark",
//     image: "https://i.pravatar.cc/48?u=118836",
//     balance: -7,
//   },
//   {
//     id: 933372,
//     name: "Sarah",
//     image: "https://i.pravatar.cc/48?u=933372",
//     balance: 20,
//   },
//   {
//     id: 499476,
//     name: "Anthony",
//     image: "https://i.pravatar.cc/48?u=499476",
//     balance: 0,
//   },
// ];

export default function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  // Save to localStorage whenever friends change
  useEffect(() => {
    localStorage.setItem("friends", JSON.stringify(friends));
  }, [friends]);

  function handleShowAddFriend(){
    setShowAddFriend((prev) => !prev); // Toggle the state
  }

  function handleAddFriend(newFriend){
    setFriends((friends) => [...friends, newFriend])
    setShowAddFriend(false);
  }

  function handleSelectFriend(friend){
    // setSelectedFriend(friend);
    setSelectedFriend(selected => selected?.id === friend.id ? null : friend);
    setShowAddFriend(false);
  }

  function handleDeleteFriend(id) {
    setFriends(friends => friends.filter(friend => friend.id !== id));
    // Clear selection if deleted friend was selected
    if (selectedFriend?.id === id) {
        setSelectedFriend(null);
    }
}

  function handleSplitBill(value){
    console.log(value)
    setFriends(friends => 
      friends.map(friend => 
        friend.id === selectedFriend.id ? {...friend, balance: friend.balance + value} : friend))
  }

  return(
    <>
    <h1 className="page-title">Eat 'N Split</h1>
    <div className="app">
      <div className="sidebar">
        <FriendsList 
          friends={friends} 
          onSelectFriend={handleSelectFriend} 
          selectedFriend={selectedFriend} 
          onDeleteFriend={handleDeleteFriend}
        />

        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}

        <Button onClick={handleShowAddFriend}>{showAddFriend? 'Close' : 'Add friend ➕'}</Button>
      </div>
      {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} onSplitBill={handleSplitBill}/>}
    </div>
    </>
  )

}