function ButtonChange({randomColor,changeColorAndPhrase}) {
  return (
    <>
        <button onClick={changeColorAndPhrase} className="randomBtn" style={{backgroundColor:randomColor}}>
          <i className="fa-solid fa-shuffle"></i>
        </button>
    </>
  )
}

export default ButtonChange