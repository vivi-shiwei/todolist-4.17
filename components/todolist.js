import React, {useState} from 'react';

function Todolist() {
    const [textInput,settextInput] = useState("");
    const [list, setlist] = useState([]);
    const addData = () => {
        if (textInput === "") {
            return false;
        } else {
            settextInput ("");
            setlist([...list, textInput]);
            alert(textInput);
        }
    };
    const removeData = function(index) {
        list.splice(index, 1);
        setlist([...list]);
    };
    return (
        <div id="App">
            <div id="todolist">
                <header>
                    <h1>React Todolist</h1>
                </header>
                <div className="center">
                    <div id="inpTodolist">
                        <input className="txtTodolist" onChange={(e)=>settextInput(e.target.value)} value={textInput}/>
                    </div>
                    <button className="butAdd" onClick={addData}>Submit</button>
                </div>
                <ul>
                    {
                        list.map((item,index) => 
                            <li key={index}>
                                <div>
                                    <button className="butDel"
                                            onClick={(e)=>removeData(index)}>remove
                                    </button>
                                    <p>{item}</p>
                                </div>
                            </li>
                        )
                    }
                </ul>
            </div>
            <style global jsx>{`
                *{
                    margin: 0;
                    padding: 0;
                    list-style: none;
                }
                    h1{
                        text-align: center;
                        line-height: 88px;
                    }
                    header{
                        height: 90px;
                    }
                    li{
                        height: 60px;
                    }
                    li>div{
                        height: 48px;
                        margin: auto;
                        border-bottom: #F1F1F1 solid 2px;
                    }
                    p{
                        margin-left: 100px;
                        font-size: 20px;
                        line-height: 48px;
                    }
                    button{
                        border-radius: 4px;
                    }
                    #App{
                        margin: 0 auto;
                        width: 800px;
                        height: 900px;
                        position: relative;
                        border-top: #40C1FD solid 6px ;
                        border-left: #40C1FD solid 6px;
                        border-right: #40C1FD solid 6px;
                    }

                    #todolist{
                        height: 860px;
                        width: 660px;
                        position: absolute;
                        left: 0;
                        right: 0;
                        top: 0;
                        bottom: 0;
                        margin: auto;
                    }
                    .center{
                        height: 40px;
                        width: 500px;
                        margin: auto;
                    }
                    #inpTodolist{
                        width: 80%;
                        height: 86%;
                        border-bottom: 3px solid #40C1FD;
                        border-top: 3px solid #40C1FD;
                        float: left;
                    }
                    .txtTodolist{
                        font-size: 20px;
                        height: 33px;
                        width: 300px;
                        outline: none;
                        border: none;
                    }
                    .butAdd{
                        color: #40C1FD;
                        font-size: 16px;
                        background-color: white;
                        margin-left: 0;
                        width: 15%;
                        height: 100%;
                        border: #40C1FD solid 3px;
                        float: right;
                    }
                    ul{
                        width: 450px;
                        height: 200px;
                        margin: 0 auto;
                        margin-top: 20px;
                    }
                    .butDel{
                        color: #D2A5B4;
                        font-size: 16px;
                        background-color: white;
                        width: 75px;
                        height: 40px;
                        float: left;
                        border: #D2A5B4 solid 3px;
                    }
                    `}</style>
        </div>
    )
}

export default Todolist;
