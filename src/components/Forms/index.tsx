import React from "react";
import Button from "../Button/index";

class Forms extends React.Component {
  render() {
    return (
        <form>
          <div>
            <label htmlFor="todo"> 
                Adicione a tarefa a ser realizada: 
                </label>
            <input 
            type="text"
            name="todo" 
            id="todo"
            placeholder="O que você deseja fazer?"
            required
            />
          </div>
          <div>
          <label htmlFor="time"> 
              Tempo a ser utilizado: 
              </label>
            <input 
            type="time" 
            step="1"
            name="time"
            id="time"
            min="00:00:00"
            max="01:30:00"
            />
          </div>
         <Button />
         </form>
    );
  }
}

export default Forms;