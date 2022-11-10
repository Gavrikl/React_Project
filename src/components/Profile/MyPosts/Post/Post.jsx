import React from "react";
import s from'./Post.module.css';


const Post =(props)=>{
 
    
    return   <div>
            <div className={s.item}>
            <img src="https://pp.userapi.com/c638122/v638122914/10e5f/T8WPQvd6_J0.jpg"></img>
            {props.message}
            <div>
                
            <span>{props.likesCount}</span>
            </div>
            </div >
     </div>


}

export default  Post;