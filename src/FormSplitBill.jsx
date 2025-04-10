import { useState } from "react";
import Button from "./Button";

export default function FormSplitBill({selectedFriend, onSplitBill}){
    const [bill, setBill] = useState('');
    const [yourExpense, setYourExpense] = useState('');
    const friendsExpense = bill ? bill - yourExpense : '';
    const [whoIsPaying, setWhoIsPaying] = useState('user');

    function handlesubmit(e){
        e.preventDefault()
        if(!bill || !yourExpense) return;

        onSplitBill(whoIsPaying === 'user' ? friendsExpense : -yourExpense)
        setBill('')
        setYourExpense('')
        setWhoIsPaying('user')
    }
    return(
        <form className="form-split-bill" action="" onSubmit={handlesubmit}>
            <h2>Split the bill with {selectedFriend.name}</h2>
            <label htmlFor="bill-value">Bill value</label>
            <input type="text" id="bill-value" value={bill} onChange={(e) => {setBill(Number(e.target.value))}}/>

            <label htmlFor="your-expense">Your expense</label>
            <input type="text" id="your-expense" value={yourExpense} onChange={(e) => {setYourExpense(Number(e.target.value) > bill? yourExpense : Number(e.target.value))}}/>

            <label htmlFor="friends-expense">{selectedFriend.name}'s expense</label>
            <input type="text" id="friends-expense" disabled value={friendsExpense}/>

            <label htmlFor="select">Who is paying the bill</label>
            <select id="select" value={whoIsPaying} onChange={(e) => {setWhoIsPaying(e.target.value)}}>
                <option value="user">You</option>
                <option value="friend">{selectedFriend.name}</option>
            </select>

            <Button color="primary">Split Bill</Button>
        </form>
    )
} 