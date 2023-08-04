import { useState } from "react";

import "./App.css";

function App() {
  const [firstBoxElements, setFirstBoxElements] = useState([
    { id: 1, value: 1 },
  ]);
  const [secondBoxElements, setSecondBoxElements] = useState([]);

  return (
    <main className="main">
      <BoxesContainer>
        {firstBoxElements.map((element) => {
          return <Box key={element.id} element={element} />;
        })}
      </BoxesContainer>

      <BoxesContainer></BoxesContainer>
    </main>
  );
}

const BoxesContainer = ({ children }) => {
  const dragOverHandler = (event) => {
    event.preventDefault();
  };

  const dropHandler = (event) => {
    const itemId = Number(event.dataTransfer.getData("text/plain"));
    console.log("You are going to drop the element with ID: ", itemId);
  };

  return (
    <div
      className="boxes-container"
      onDragOver={dragOverHandler}
      onDrop={dropHandler}
    >
      {children}
    </div>
  );
};

const Box = ({ element }) => {
  const { id, value } = element;

  const dragStartHandler = (event, itemId) => {
    console.log("You are dragging me!!! ", itemId);
    event.dataTransfer.setData("text/plain", id);
  };

  return (
    <div
      className="box"
      draggable={true}
      onDragStart={(event) => dragStartHandler(event, id)}
    >
      {value}
    </div>
  );
};

export default App;

/*
const drag = event => {
    event.dataTransfer.setData('text/plain', event.currentTarget.dataset.id)
}

const drop = event => {
    const column = event.currentTarget.dataset.column
    const id = Number(event.dataTransfer.getData('text/plain'))

    event.currentTarget.classList.remove('drop')

    event.preventDefault()

    const updatedState = cards.map(card => {
        if (card.id === id) {
            card.state = column
        }

        return card
    })

    setCards(updatedState)
}
*/
