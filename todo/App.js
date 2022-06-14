import React, {useReducer, useEffect, createContext} from "react";
import { useResource } from 'react-request-hook'
import TodoList from "./TodoList";
import Header from "./Header";
import UserBar from "./UserBar";
import CreateTodo from "./CreateTodo";
import appReducer from "./reducers";
import StateContext from "./Context";

function App() {
  
   const [ state, dispatch ] = useReducer(appReducer, {user: '', todos: []})

   const [ posts, getPosts ] = useResource(() => ({
      url: '/todos',
      method: 'get'
   }))

   useEffect(getPosts, [])

   useEffect(() => {
     if (posts && posts.data) {
        dispatch({ type: 'FETCH_POSTS', todos: posts.data})
     }
   }, [posts])

   
   useEffect(() => {
     if (state.user) {
       document.title = `${state.user}'s Todos`
     } else {
       document.title = "My Todos"
     }
   })

    return (
      <div>
        <ThemeContext.Provider value= {{primary: "blue"}}>
            <Header text="My Todos"/>
        </ThemeContext.Provider>
        <UserBar user={state.user} dispatch={dispatch}/>
        {state.user && <CreateTodo dispatch={dispatch} />}
        {state.user && <TodoList todos={state.todos} dispatch={dispatch} />}
      </div>
    )
}

export const ThemeContext = createContext({primary: 'red'})
export default App;