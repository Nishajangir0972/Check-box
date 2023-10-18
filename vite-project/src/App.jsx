import React, { useState } from 'react'

function App() {
  const [checked, setChecked] = useState([])
  const [box1, setBox1] = useState([{id:"1" , value:"text1"},{id:"2",value:"text2"},{id:"3", value:"text3"},{id:"4",value:"text4"}])
  const [box2, setBox2] = useState([])


  function handleChange(e) {
    // const selected = box1[index]
    // const removesItem = box1.filter((item, i) => i !== index)

    // setBox1(removesItem ,
    //   {id: index.target.id , value: index.target.value})
    // console.log(removesItem)

    // setBox2([...box2 , selected])

    if (e.target.checked === true) {
      setChecked([
        ...checked,
        { id: e.target.id, value: e.target.value }
      ]);

    }
    else {
      setChecked.filter((remove) => {
        return remove.id == !e.target.id
      })
    }
    // console.log(checked)


  }

  const leftItem = () => {
    console.log(checked)

    setBox2([...box2, ...checked])
    // console.log(checked)
    // console.log(box2)
    // console.log(setBox2)
    setBox1(box1.filter((task)=>{
      return !checked.some((item)=> item.id === task.id)
    }))

setChecked([])
  }
  const rightItem = () =>{
setBox1([...box1 , ...checked])
setBox2(box2.filter((task)=>{
  return !checked.some((item)=>{
    item.id === task.id
  })
}))
setChecked([])
  }


  return (
    <div className='main'>
      <div id="left">
<ul>
  {
    box1.map((item , index)=>{
      return (
        <li key={item.id}>
                    <input type="checkbox" id={item.id} value={item.value} onChange={handleChange} />
                    {item.value}

                  </li>
      )
    })
  }
</ul>
      </div>
      <div id="btn">
        <button onClick={leftItem}>left to right</button>
        <button onClick={rightItem}>right to left</button>
      </div>
      <div id="right">
<ul>
  {
    box2.map((item,index)=>{
      return (
      <li key={index+1}>
<input type="checkbox" id={item.id} value={item.value} onChange={handleChange} />
{item.value}
      </li>
      )
    })
  }
</ul>
      </div>

    </div>

  )
}

export default App