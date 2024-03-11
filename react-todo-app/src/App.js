import React, {Component} from "react";
import "./App.css"

export default class App extends Component{

  state = {
    todoData : [
      // {
      //   id:"1",
      //   title:"공부하기",
      //   completed:false,
      // },
      // {
      //   id:"2",
      //   title:"잠자기",
      //   completed:false,
      // },
      // {
      //   id:"3",
      //   title:"운동하기",
      //   completed:false,
      // },
    ],
    value: "",
  };

  btnStyle={
    color : "#fff",
    border : "none",
    padding : "5px 9px",
    borderRadius : "50%",
    cursor:"pointer",
    float:"right",
  };

  getStyle = (completed)=>{
    return{
      padding:"10px",
      borderBottom: "1px #ccc dotted",
      textDecoration : completed ? 'line-through': 'none',
      //사용자가 체크박스에 체크를 했을 때만 목록의 중앙에 줄이 그어지게할거임
    };
  };

  listStyle = (completed) =>{
    return{
      padding:"10px",
      borderBottom:"1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none",
      //조건부 삼항 연산자를 활용해 완료가 되었을 때만 줄을 그어주고 완료가 되지 않을때는 줄을 그어주지 않음
    };
  };

  


  handleClick = (id) => {
    let newTodoData = this.state.todoData.filter((data)=>data.id !== id);
    this.setState({todoData:newTodoData});
    //State를 이용한 할 일 목록 삭제하기
  };

  //여기서 e는 이벤트를 가져오는 걸 의미함
  handleChange = (e) =>{
    //console.log('e',e.target.value);
    //사용자가 입력칸에 새로운 todo를 적으면 그 값으로 value를 바꿔줌
    this.setState({value : e.target.value});
  }

  //handleSubmit버튼을 통해 사용자가 입력 버튼 클릭 시 기존의 목록에 추가한 다음 입력란에 있는 새로운 TODO글씨를 지워줌
  handleSubmit = (e) => {
    //1. form안에 input을 전송할 때 페이지 리로드 되는 걸 막아줌
    e.preventDefault();

    //2. 새로운 할 일 데이터받기
    let newTodo = {
      id: Date.now(), //id는 unique한 값이어야하므로 현재의 Date를 받아서 사용함
      title: this.state.value,
      completed:false
    }

    //3. 원래 있던 할 일에 새로운 할 일 더해주기
    //입력란에 있던 글씨 지워주기
    this.setState({todoData:[...this.state.todoData, newTodo], value: ""});

  };

  handleCompleteChange = (id) => {
    let newTodoData = this.state.todoData.map((data)=>{
     if(data.id === id){
      data.completed =! data.completed;
     } 
     return data;
    });
    this.setState({todoData: newTodoData});
  };



  render(){
    return (
      <div className="container">
        <div className = "todoBlock">
          <div className="title">
            <h1>할 일 목록</h1>
          </div>

            {this.state.todoData.map((data) => (
              <div style={this.listStyle(data.completed)} key={data.id}>
                  <input type="checkbox" defaultChecked={false} onChange={()=>this.handleCompleteChange(data.id)}/>
                    {data.title}
                  <button style={this.btnStyle} onClick={() => this.handleClick(data.id)} >x</button>
              </div>
          ))} 

              <form style={{display:'flex'}} onSubmit={this.handleSubmit}  >
                <input type="text" name="value" style={{flex:'10', padding:'5px'}}
                  placeholder="해야 할 일을 입력하세요."
                  value={this.state.value}
                  //지금은 입력칸에 아무것도 못적지만, value자리에 state를 넣어서 value의 값에 따라 변할 수 있게하자
                  onChange = {this.handleChange}
                />
                <input 
                  type="submit" value="입력" className="btn"
                  style={{flex:'1'}}
                />

              </form>

        </div>  
      </div>
    );
  }
}