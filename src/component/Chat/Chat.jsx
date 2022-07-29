import React from "react";

import langue from '../langue/CheckLangue';
import style from '../Chat/Chat.module.css'
import { NavLink } from "react-router-dom";

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

const Chat = () =>{
    return(
        <div>
        <h1>
        {langue()  ? "Chat": "чат"}
        </h1>
        <div className={style.dialogs}>
            <div className={style.dialogsitems}>
                    
               <DialogItem id='1' nameEn='Ivan' nameUa='Іван' />
               <DialogItem id='2' nameEn='Inna' nameUa='Інна' />
               <DialogItem id='3' nameEn='Nastya' nameUa='Настя' />
                    
            </div>
            <div className={style.messages}>
                <Message msgen='Hi' msgua='Привіт' />
                <Message msgen='Hello!' msgua='Добрий день!' />
                
            </div>
        </div>

        </div>
        
    )
}
export default Chat