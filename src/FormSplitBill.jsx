export default function FormSplitBill({selectedFriend}){
    return(
        <form className="form-split-bill" action="">
            <h2>Split the bill with {selectedFriend.name}</h2>
            <label htmlFor="bill-value">Bill value</label>
            <input type="text" id="bill-value" />

            <label htmlFor="your-expense">Your expense</label>
            <input type="text" id="your-expense" />

            <label htmlFor="friends-expense">{selectedFriend.name}'s expense</label>
            <input type="text" id="friends-expense" disabled />

            <label htmlFor="select">Who is paying the bill</label>
            <select id="select">
                <option value="user">You</option>
                <option value="friend">{selectedFriend.name}</option>
            </select>
        </form>
    )
} 