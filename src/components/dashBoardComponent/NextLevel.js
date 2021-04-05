import React,{useState,useEffect} from 'react'

function NextLevel() {
  const [Li,setLi]=useState(1)
  useEffect(()=>{
    let data=localStorage.getItem('LevelInc')
    setLi(data)
  })
  return (
    <div className="right-align">
    {Li<2?<a className="black waves-effect btn-small" href="/level1/1">Crack IT!</a>:''}
    {Li==2?<a className="black waves-effect btn-small" href="/level1/2">Chapter 2</a>:''}
    {(Li>2&&Li<=3)?<a className="black waves-effect btn-small" href="/level1/3">Chapter 3</a>:''}
    {Li==4?<a className="black waves-effect btn-small" href="">Completed</a>:''}
    </div>
  )
}

export default NextLevel
