import './index.css';
import Header from './Header';
import Footer from './Footer'
import SearchItem from './SearchItem'
import Main from './Main'
import { useState, useEffect } from 'react';

import AddItem from './AddItem';

function App() {

  const shoppinList = localStorage.getItem('listAnimales');
  let mainState = "";


  if (shoppinList) {
    mainState = JSON.parse(shoppinList);
  }
  else{
    mainState = [
      {
          id: 1,
          checked: true,
          item: "Kenny"
      },
      {
          id: 2,
          checked: false,
          item: "Barker"
      },
      {
          id: 3,
          checked: false,
          item: "Teddy"
      }
    ];
  }

let [s_count, s_setCount] = useState(0);
let [s_items, s_setItems] = useState(mainState);
let [s_search, s_setSearch] = useState('');

useEffect(() => {
  document.title = `You clicked ${s_items.length + " " + s_count} times`;
  s_setCount(s_count + 1);

  localStorage.setItem('listAnimales', JSON.stringify(s_items)); 
}, [s_items]); 

  return (
    <div className="App">
       <Header title="Animales" />
       <AddItem 
          items = {s_items} 
          setItems = {s_setItems} 
       />
       <SearchItem
          setSearch = {s_setSearch}        />
       <Main
          items = {s_items.filter(item => (item.item).toLowerCase().includes(s_search.toLowerCase()) )}
          setItems = {s_setItems} />
       <Footer 
          items = {s_items} />
    </div>
  );
}

export default App;
