import React, { useState } from "react";
import "./styles.css"

function App() {

  const [inCart, setInCart] = useState(true)
  const [disable, setDisable] = useState(false)
  const [openDetail, setOpenDetail] = useState(false)

  function handleCart () {
    setInCart(!inCart) 
    setDisable(true)
  }

  function handleDelete () {
    setDisable(false)
  }

  function handleOpenDetail () {
    setOpenDetail(true)
  }

  function handleClose () {
    setOpenDetail(!openDetail)
  }

  return (
    <div className="App">
      <div className="card">
        <img className="kros" src="https://i1.wp.com/images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" alt="крософка"></img>
        <h1 className="name">Nike sneaker</h1>
        <button onClick={handleOpenDetail} className="detail">Детали</button>
        <h1 className="price">$120</h1>
        <hr></hr>
        <div className="encription">Lorem ipsum lomet nerty addfgd tthty kgoejboe weve iouefw.</div>
        <button disabled={disable} onClick={handleCart} className={disable ? 'buyOff' : 'buyIn'}>{!disable ? 'Добавить в корзину' : 'Уже в корзине'}</button>
        <div>{disable && <button onClick={handleDelete} className="deleteBtn">Удалить из корзины</button>}</div>
      </div>
        <div>{openDetail && <div className="tovarOp">lorem iope rigo epr jsvoe erpoj geopj bv eopj rerpoj ejreije eijb eiob eiobeib lcdl wevwnvw<button onClick={handleClose} className="X">x</button></div>}</div>
    </div>
  );
}

export default App;
