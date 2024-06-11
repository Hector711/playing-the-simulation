import React, { useState } from "react";
import { DndContext } from "@dnd-kit/core";

import Droppable from "@/components/dnd-kit/Droppable";
import Draggable from "@/components/dnd-kit/Draggable";

export default function Goals() {
  const [isDropped, setIsDropped] = useState(false);
  const draggableMarkup = <Draggable>Drag me</Draggable>;
  return (
    <DndContext onDragEnd={handleDragEnd}>
      <main id="goals">
        <h2>Planificación</h2>
        <h4>Objetivo:</h4>
        <div id="ruta">
          Ruta
          <Droppable>{isDropped ? draggableMarkup : "Drop here"}</Droppable>
        </div>
        <Draggable />
        {!isDropped ? draggableMarkup : null}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
          praesentium earum, assumenda, ad delectus tenetur ipsum deleniti
          pariatur saepe in neque esse cum tempora quo quaerat illo totam
          necessitatibus soluta!
        </p>
      </main>
    </DndContext>
  );
  function handleDragEnd(event) {
    if (event.over && event.over.id === "droppable") {
      setIsDropped(true);
    }
  }
}
