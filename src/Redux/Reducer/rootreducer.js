import { ADDTASK, DELETETASK, EDITTASK, FINISHTASK } from "../Action/actiontype";
let firstid=0

export const initialState = {
    todos: [
      {
        id: "61a038c7fc13ae07060001f4",
        
        description: "todo 1",
        isDone: true,
      },

      {
        id:"61a038c7fc13ae07060001f5",
        
        description: "todo 2",
        isDone: false,
      },

      {
        id:"61a038c7fc13ae07060001f6",
        
        description: " todo 3",
        isDone: false,
      },
      
    ],
  };
  
const reducer=(state=initialState , action )=>{

    switch(action.type)
    {
       case(ADDTASK):
       {
        return { ...state, todos: [...state.todos, action.payload] };
       }
       case (FINISHTASK):
        {
         let arr= state.todos.map((e)=>{
          if (e.isDone === action.payload.isDone) {
            e.isDone = true;
          }

        })
        return {...state, todos: [...arr]} 

        }
        case EDITTASK:
          state.todos.forEach((todo) => {
            if (todo.id === action.payload.id) {
              todo.description = action.payload.description;
              todo.isDone = action.payload.isDone;
            }
          });
          return { ...state, todos: [...state.todos] };

        case (DELETETASK):
        {
            let arr = state.todos.filter((todo) => {return todo.id !== action.payload.id})
            return {...state, todos: [...arr]} 
        }
        default:
            return state;

    }


}

export default reducer;