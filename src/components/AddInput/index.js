import React,{useRef} from "react";
import axios from "axios";

function AddInput(props) {
    const { addItem } = props;
    const inputRef = useRef();
    const submitValue = () => {
        const inputValue = inputRef.current.value.trim();
        addItem(inputValue);
        inputRef.current.value = '';
    }

    const btnInfo = () =>{
        axios.get('/api/test/info').then(res=>{
            console.log(res);
        })
    }
    return (
        <div>
            <button onClick={btnInfo}>请求数据</button>
            <input type='text' placeholder='请输入代办事件' ref={inputRef}/>
            <button onClick={submitValue}>添加</button>
        </div>
    )
}

export default AddInput;
