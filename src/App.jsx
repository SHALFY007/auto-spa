import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import { useState, useEffect } from 'react';
import { fetchAuto } from './store/autoReducer';
import { useDispatch, useSelector } from 'react-redux';

function App() {

  const dispatch = useDispatch()
  const auto = useSelector(state => state.auto.data)
  const [layout, setLayout] = useState()
  const [count, setCount] = useState(0)

  const show = () => {
    const l = auto.map(a => {
       return <p>{a.title}</p>
    })

    setLayout(l)

    console.log(l)
  }

  useEffect(() => {
    dispatch(fetchAuto())
  }, [])

  useEffect(() => {
    setCount(Math.floor(auto.length / 20))
    show()
  }, [auto])

  return (
    <div className="App">
     <Header/>
     <div className="">
     {layout}
     </div>
     {count}
    </div>
  );
}

export default App;
