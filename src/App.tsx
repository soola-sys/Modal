import React, { useState } from "react";
import TodoList from "./components/TodoList/TodoList";
import TodoStatistics from "./components/TodoStatistics/TodoStatistics";
import { TodoProvider } from "./contexts/todo.context";
import styles from "./App.module.scss";
import  MyModal  from "./components/MyModal/MyModal";
import useModal from "./hooks/useModal";

function App() {
  const {open, onClose, onOpen} = useModal({initOpen:true});
  const {
   open: modalOpen,
   onClose : addModalClose,
   onOpen : addModalOpen,
  } =  useModal();
  return (
    <div className="App">
      <button type ="button" className={styles.button} onClick={onOpen}>Open modal</button>
      <button type ="button" className={styles.button} onClick={addModalOpen}>Add Todo</button>
      <MyModal open={open}
       onClose = {onClose}
       title="Lorem Ipsum is simply dummy text of the printing and 
       typesetting dawdwadawdawdawdawd">
      </MyModal>
      <MyModal open={modalOpen}
       onClose = {addModalClose}
       title="Modal for adding new todo" actions = {{
        cancel:{
        text:'Cancel',
        onCancel:addModalClose,
      },
      submit:{
        text:'Add',
        onSubmit: () => {},
      },
      }}>
      </MyModal>
      <TodoProvider>
        <div className={styles.wrap}>
          <TodoStatistics />
          <TodoList />
        </div>
      </TodoProvider>
    </div>
  );
}

export default App;
