import React from "react";
import s from'./ProfileInfo.module.css';


const ProfileInfo =()=>{
    return  <div >
        <div>
            <img src="https://media.tproger.ru/uploads/2016/10/reactmini.png" alt="" />
        </div>
        <div className={s.discriptionBloc}>
            ava+description
        </div>   
    </div>

}

export default  ProfileInfo;