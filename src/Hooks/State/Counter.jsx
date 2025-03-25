import { useState } from 'react'
import './Counter.css'

export const Counter=()=>{

    const [count, setCount] = useState(0);


    const clickHandlerInc = () =>{
        setCount((prevState)=>{
            return prevState + 1;
        })
    }
    const clickHandlerDec = () =>{
        setCount((prevState)=>{
            return prevState-1;
        })
    }
    const clickHandler=()=>{
        setCount(0)
    }

    return (
        <>
            
            <h1 className='h1'>Counter:{count}</h1>
            <button onClick={clickHandlerInc}>Increment</button>
            <button onClick={clickHandlerDec}>Decrement</button>
            <button onClick={clickHandler}>Reset</button>        
        </>
    )
}



















// export const Counter = () => {
//     const [count, setCount] = useState(0);
    
//       return (
//         <>
//         <div className="Container">
            
//             <h1 className="h1">Counter:{count}</h1>
//             <button 
//                 onClick={()=>
//                     setCount((prevstate)=>{
//                        return prevstate + 1
//                     })
//                 }
//                 >
//                     Increment</button>
//             <button 
//                 onClick={()=>
//                     setCount((prevstate)=>{
//                         return prevstate - 1;
//                     }) 
//                     }
//                     >
//                 Decreament</button>
//             <button 
//                 onClick={()=>setCount(0)}>Reset</button>
            
//             </div>    
//         </>
//       )
//     }












// export const Counter = () => {
// const [count, setCount] = useState(0);

//   return (
//     <>
//     <div className="Container">
        
//         <h1 className="h1">Counter:{count}</h1>
//         <button onClick={()=>setCount(count+1)}>Increment</button>
//         <button onClick={()=>setCount(count-1)}>Decreament</button>
//         <button onClick={()=>setCount(0)}>Reset</button>
        
//         </div>    
//     </>
//   )
// }
