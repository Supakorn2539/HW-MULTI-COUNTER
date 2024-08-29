function App() {
    const [count, setCount] = React.useState([
        { id: 1, value: 0 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 },
    ])
    let [sum,setSum] = React.useState(0)
    const Calculate = (id,num) =>{
        let idx = count.findIndex(el => el.id === id)
        let newCount = [...count]
        if(newCount[idx].value+num < 0){
            return   
        }
            sum = 0;
            newCount[idx].value += num
            newCount.forEach(el=>{
              
              sum = el.value+sum
            setSum(sum)  
            })
            
            
            setCount(newCount)
    }
    const hdlDel = (id) =>{
            
            let xix = count.filter(el =>el.id != id)
            sum=0;
            xix.forEach(el =>{
                sum = el.value+sum
           
            setSum(sum)
            setCount(xix)
            })
    }

    const hdlAdd = () =>{
        let newArr = [...count]
        newArr.push({id: count[count.length-1].id+1, value:0})
        setCount(newArr)
    }
        return (
        <div>
            <button onClick={hdlAdd}>Add Counter</button>
            <h1>Sum ={sum}</h1>
            <CreatMap  count={count} Calculate={Calculate} hdlDel={hdlDel}/>
        </div>
    )

}
function CreatMap(props){
    let {count,Calculate,hdlDel} = props
    return (
        count.map(el => (
            <UpdateCounter item={el} Calculate={Calculate} hdlDel={hdlDel}/>
        ))
    )
}  





function UpdateCounter(props) {
    let {item,Calculate, hdlDel} = props
    return (
        <div>
            
            <div className='counter'>
                <button onClick = {() => Calculate(item.id,-1)}>-</button>
                <p>{item.value}</p>
                <button onClick = {() => Calculate(item.id,1)}>+</button>
                <button onClick = {() => Calculate(item.id,-item.value)}>C</button>
                <button onClick = {() => hdlDel(item.id)}>X</button>
            </div>
        </div>
    )
}
ReactDOM.createRoot(document.querySelector('#root')).render(<App />);