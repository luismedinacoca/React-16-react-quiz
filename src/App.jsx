import Header from './components/Header'
import Main from './components/Main'
import { useEffect, useReducer } from 'react'

const initialState = {
  questions: [],
  status: "loading", // 'loading' 'error', 'ready', 'active', 'finished'
};

const reducer = (state, action) => {
  switch(action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      }

    case "dataFailed":
      return {
        ...state,
        status: "error",
      }  
    default:
      throw new Error("Action Unknown!")
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect( () => {
    fetch('http://localhost:8000/questions')
      .then((resp) => resp.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((error) => dispatch({ type: "dataFailed" }))
  }, [])
  return (
    <div className="app">
      <Header />
      <Main>
        <p>1/15</p>
        <p>Question</p>
      </Main>
    </div>
  )
}

export default App;