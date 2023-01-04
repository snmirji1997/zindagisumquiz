import React, { useState } from 'react'

const Quizpage = () => {

    const [cart,setaddtocart] = useState([]);
    const [score,setscore] = useState(0);
    let sum = 0;

    let data = [
        {question:"1",options:[1,2,3,4],value:[1,2,3,4]},{question:"2",value:[1,2,3,4],options:[1,2,3,4]},
        {question:"3",value:[1,2,3,4],options:[1,2,3,4]},{question:"4",value:[1,2,3,4],options:[1,2,3,4]},
        {question:"5",options:[1,2,3,4],value:[1,2,3,4]},{question:"6",value:[1,2,3,4],options:[1,2,3,4]},
        {question:"7",options:[1,2,3,4],value:[1,2,3,4]},{question:"8",options:[1,2,3,4],value:[1,2,3,4]},
        {question:"9",options:[1,2,3,4],value:[1,2,3,4]},{question:"10",options:[1,2,3,4],value:[1,2,3,4]},
        {question:"11",options:[1,2,3,4],value:[1,2,3,4]}

    ]

    const calculatescore = () => {
       cart.forEach((item)=>{
        sum = sum + parseInt(item); 

       })


        
        alert(sum);
   

    }

    const addtocart = (e) => {
        alert(`${e.target.value}`)
        setaddtocart([...cart,e.target.value])

    }
  return (
    <div>
        <h1>Quizpage</h1>
        <div style={{display:"flex",flexDirection:"column"}}>
            {
                data.map((item)=>{
                    return (
                        <div>
                            <span>{item.question}</span>
                            <div style={{display:"flex",flexDirection:"column",justifyContent:'center',alignItems:"center"}}>
                                <button style={{margin:1 ,width:"50%"}} value={item.options[0]} onClick={addtocart}>{item.options[0]}</button>
                                <button style={{margin:1 ,width:"50%"}} value={item.options[1]} onClick={addtocart}>{item.options[1]}</button>
                                <button style={{margin:1 ,width:"50%"}} value={item.options[2]} onClick={addtocart}>{item.options[2]}</button>
                                <button style={{margin:1 ,width:"50%"}} value={item.options[3]} onClick={addtocart}>{item.options[3]}</button>
                            </div>
                            
                        </div>
                        
                        )
                })
            }
        </div>
        <button onClick={calculatescore}>Calculate Score</button>
    </div>
  )
}

export default Quizpage