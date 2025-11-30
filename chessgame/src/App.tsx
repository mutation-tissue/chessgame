import './App.css'
import {Field} from './components/field.tsx'
import {initializeField} from './components/field.tsx'
import {useState} from 'react';


function App() {
  
  //const [field, setField] = useState(initializeField());

  function initialize() {
      initializeField();
      // 状態の確認は useEffect で行う
      // useEffect(() => { console.log(field) }, [field]);
  }

  return (
    <>
      <button onClick={initialize}>initialize</button>
      <Field />
    </>
  )
}



export default App
