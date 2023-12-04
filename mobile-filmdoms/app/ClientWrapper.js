'use client'
import {UserContext} from "@/app/hooks/useContext/UserContext";
import {useLayoutEffect, useState} from "react";
import axios from "axios";

export default function ClientWrapper(props){

  let [user,changeUser] = useState(props.value);
  let userState = [user,changeUser];

    useLayoutEffect(  ()=>{ refreshTokenMethod()});

     function refreshTokenMethod(){
        axios.post('/api/v1/account/refresh-token',{headers: {"Content-Type": `application/json`}})
            .catch(reason => {})
    }

    return(
        <div>
            <UserContext.Provider value={userState}>
            {props.children}
            </UserContext.Provider>
        </div>
    )
}