import React from "react";

import langue from '../langue/CheckLangue';
import style from '../Chat/Chat.module.css'
import { NavLink } from "react-router-dom";

let userdata = [
    {id: 1, nameEn:'Ivan', nameUa:'Іван'},
    {id: 2, nameEn:'Inna', nameUa:'Інна'},
    {id: 3, nameEn:'Nastya', nameUa:'Настя'}
]
let apimsg = [
    {id: 1, msgen:'Hi', msgua: 'Привіт'},
    {id: 2, msgen: 'Hello!', msgua: 'Добрий день!'},
]
const DialogItem = (props) =>{
    let path = "/Chat#/" +  props.id 

    return <NavLink to={path}>
                <div className={style.dialog}>
                    <p>{langue()  ? props.nameEn : props.nameUa}</p>
                </div>
            </NavLink>
}
const Message = (props) =>{

    return <div className={style.message}>
    <p>{langue()  ? props.msgen : props.msgua }</p>
</div>
}
let userEl = userdata.map( user => <DialogItem id={user.id} nameEn={user.nameEn} nameUa={user.nameUa} />)
let msgEl = apimsg.map( msg => <Message id={msg.id} msgen={msg.msgen} msgua={msg.msgua} />)
const Chat = () =>{
    return(
        <div>
        <h1>
        {langue()  ? "Chat": "чат"}
        </h1>
        <div className={style.dialogs}>
            <div className={style.dialogsitems}>
                {userEl}   
            </div>
            <div className={style.messages}>
                {msgEl}
            </div>
        </div>

        </div>
        
    )
}
export default Chat