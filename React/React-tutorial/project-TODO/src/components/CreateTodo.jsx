import React from 'react'
import TodoList from './TodoList'
import styles from './CreateTodo.module.css'
const CreateTodo = ({ todoItems, handleDeleteItem }) => {
  return (
    <>
      <div className={styles.itemsContainer} >
        {todoItems.map((item) =>
          <TodoList key={item.name} todoDate={item.dueDate} todoTitle={item.name} handleDeleteItem={handleDeleteItem} />
        )}
      </div>
    </>
  )
}
export default CreateTodo
