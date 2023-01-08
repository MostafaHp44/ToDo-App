import { ADDTASK, DELETETASK, EDITTASK,  FINISHTASK } from "./actiontype"

export const ADDTODO=(newtodo)=>
{
return {
    type:ADDTASK,
    payload: newtodo
} 

}

export const EDITTODO=(newedit)=>
{
    return {
        type:EDITTASK,
        payload:newedit
    }

}

export const DELETETODO=(newdel)=>
{   
    return {
        type:DELETETASK,
        payload:newdel
    }

}

export const FINISHTODO=(newfinish)=>
{
    return{
        type:FINISHTASK,
        payload:newfinish
    }
   
}