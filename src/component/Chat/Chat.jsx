import React from "react";
import langue from '../langue/CheckLangue';
import style from '../Chat/Chat.module.css'
import { NavLink} from "react-router-dom";



const DialogItem = (props) =>{
    let path = "/Chat/" +  props.id 

    return <NavLink to={path}>
                <div className={style.dialog} id={props.id}>
                    <p>{langue()  ? props.nameEn : props.nameUa}</p>
                </div>
            </NavLink>
    
}
const Message = (props) =>{

    return <div className={style.message} id={props.id}>
    <p>{langue()  ? props.msgen : props.msgua }</p>
</div>
}
const Chat = (props) =>{

    let userEl = props.dataUser.map( user => <DialogItem id={user.id} nameEn={user.nameEn} nameUa={user.nameUa} />)
    let msgEl = props.dataMsg.map( msg => <Message id={msg.id} msgen={msg.msgen} msgua={msg.msgua} />)

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