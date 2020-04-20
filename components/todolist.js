import React, {useState} from 'react';

function Todolist() {
    const [textInput,settextInput] = useState("");
    const [list, setlist] = useState([]);
    const [checks, setCheck] = useState([]);
    const addData = () => {
        if (textInput === "") {
            return false;
        } 
        else {
            settextInput ("");
            setlist([...list, textInput]);
        }
    };
    const removeData = function(index,option) {
        if(option){
            checks.splice(index, 1);
            setCheck([...checks]);
        }
        else{
            list.splice(index, 1);
            setlist([...list]);
        }
    };
    const updatechecked = function(index,option){
        if(option){
            checks.splice(index, 1);
            setCheck([...checks]);
            setlist([...list,index]);
        }
        else{
            list.splice(index, 1);
            setlist([...list]);
            setCheck([...checks,index]);
        }
       }
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
                <section>
                    <h2>正在进行</h2>
                    <ul>
                        {
                            list.map((item,index) => 
                                <li key={index}>
                                    <div>
                                        <input className="che" type="checkbox" onClick={(e,b)=>updatechecked(item,false)} />
                                        <p>{item}</p>
                                        <button className="butDel"
                                                onClick={(e,b)=>removeData(index,false)}>remove
                                        </button>
                                    </div>
                                </li>
                            )
                        }
                    </ul>
                    <h2>已经完成</h2>
                    <ul>
                        {
                            checks.map((item,index) => 
                                <li key={index}>
                                    <div className="divChecks">
                                        <input className="che" type="checkbox" checked="checked" onClick={(e,b)=>updatechecked(item,true)}/>
                                        <p className="pitem">{item}</p>
                                        <button className="butDel"
                                                onClick={(e)=>removeData(index,true)}>remove
                                        </button>
                                    </div>
                                </li>
                            )
                        }
                    </ul>
                </section>
            </div>
            <style global jsx>{`
                *{
                    margin: 0;
                    padding: 0;
                    list-style: none;
                }
                h1{
                    color: #0B5FA5;
                    text-align: center;
                    line-height: 88px;
                }
                h2{
                    color: #3F8FD2;
                }
                header{
                    height: 90px;
                }
                li{
                    height: 60px;
                }
                li>div{
                    height: 60px;
                    margin: auto;
                    border-bottom: #F1F1F1 solid 2px;
                }
                .che{
                    float: left;
                    margin-top: 28px;
                    margin-left: 50px;
                    font-size: 20px;
                    line-height: 48px;
                }
                p{
                    float:left;
                    margin-left: 50px;
                    color: #66AED2;
                    font-size: 20px;
                    line-height: 60px;
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
                    color: #043C6B;
                    font-size: 20px;
                    height: 33px;
                    width: 300px;
                    outline: none;
                    border: none;
                }
                .divChecks{
                    background-color: #F1F1F1;
                }
                .pitem{
                    text-decoration:line-through;
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
                section{
                width: 500px;
                }
                ul{
                    width: 450px;
                    margin: 0 auto;
                    margin-top: 20px;
                }
                .butDel{
                    color: #D2A5B4;
                    font-size: 16px;
                    background-color: white;
                    margin-top: 10px;
                    float:right;
                    width: 75px;
                    height: 40px;
                    border: #D2A5B4 solid 3px;
                }
            `}
            </style>
        </div>
    )
}

export default Todolist;
