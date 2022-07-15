import { useState } from 'react'
import MyList from './MyList.js'


const MyContainer = () => {

    const [text, setText] = useState('')

    const [items, setItems] = useState([
        { id: "1", text: "This is an item" },
        { id: "2", text: "Also this" },
    ]);

    const addList = () => {
        const id = items.length + 1;      
        const newItem = {id, text}; 
        setItems([...items, newItem]);
        setText('')

    }

  return (
    <div>
      <h2>My Container</h2>
      <textarea id="textArea" placeholder='Add new list item' onChange={(e) => setText(e.target.value)} value={text}></textarea>
      <button id="addButton" onClick={addList}>Add new item</button>

      <MyList header="Really epic list component"
      items={items} 
      />
    </div>
  )
}

export default MyContainer
