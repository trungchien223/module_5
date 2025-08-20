
import './App.css'
import Counter from './components/Counter'

function App() {
  return (
    <div className="app">
      <div className="counters-container">
        <Counter 
          title="Counter 1" 
          incrementValue={1} 
          buttonText="Add 1" 
        />
        <Counter 
          title="Counter 2" 
          incrementValue={2} 
          buttonText="Add 2" 
        />
      </div>
    </div>
  )
}

export default App
