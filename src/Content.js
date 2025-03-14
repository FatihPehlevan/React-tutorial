import { useState } from "react";

function Content() {
    const [name, setName] = useState("Dave")
    const [count, setCount] = useState(0)
    const handleNameChange = () => {
        const names = ["Bob", "Kevin", "Dave", "Hang"];
        const int = Math.floor(Math.random() * 4);
        setName (names[int]);
      }
    const handleClick = () => {
        setCount (count + 1)
        setCount (count + 2)
        // setCount(prev => prev + 1);
    }
    const handleClick2 = (name) => {
        console.log(`${count}`)
    }
    const handleClick3 = (e) => {
        console.log(e.target.innerText)
    }
  return (
    <main>
        <p onDoubleClick={handleClick}>
            Hello {name}!
        </p>
        <hr />
        <div>
          {count}
        </div>
        <button onClick={handleNameChange}>Change Name</button>
        <button onClick={handleClick}>Increase number</button>
        <button onClick={handleClick2}>Print count</button>
    </main>
  )
}

export default Content