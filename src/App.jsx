import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import { useState, useEffect } from 'react';
import { fetchAuto } from './store/autoReducer';
import { useDispatch, useSelector } from 'react-redux';
import AutoCard from './AutoCard/AutoCard';
import { Container } from '@mui/material';

function App() {

  const dispatch = useDispatch()
  const auto = useSelector(state => state.auto.data)
  const filterPar = useSelector(state => state.auto.search)
  const [layout, setLayout] = useState()
  const [count, setCount] = useState(0)

  const show = () => {
    const l = auto.map(a => {
       return <AutoCard value={a}></AutoCard>
    })

    setLayout(l)

    console.log(l)
  }

  const searchList = () => {
    const divs = document.querySelectorAll('.auto-card');

    divs.forEach(div => {
      let header = div.querySelector('.car-title');

      if (!header.innerHTML.toLowerCase().startsWith(filterPar.toLowerCase())) div.classList.add('hide')
      if (header.innerHTML.toLowerCase().startsWith(filterPar.toLowerCase())) div.classList.remove('hide')
    })
  }

  useEffect(() => {
    dispatch(fetchAuto())
  }, [])

  useEffect(() => {
    setCount(Math.floor(auto.length / 20))
    show()
  }, [auto])

  useEffect(() => {
    console.log(filterPar)
    searchList()
  }, [filterPar])

  return (
    <div className="App">
     <Header/>
     <Container>
      <h1 className="App-header">Автомобили Ford в Москве</h1>
      <div className="App-show">
        {layout}
      </div>
     </Container>
     {count}
    </div>
  );
}

export default App;
