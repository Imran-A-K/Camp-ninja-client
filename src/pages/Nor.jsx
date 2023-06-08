const firstDiv= ()  =>{
  console.log("first div is logged")
}
const secondDiv = () => {
  console.log("second div is logged")
}
const Nor = () => {
  return (
    <div className='cursor-pointer ' onClick={firstDiv}>
      <div onClick={secondDiv}>
cdkc
      </div>
    </div>
  )
}

export default Nor