import React,{useMemo} from "react";
import {io} from 'socket.io-client'

const socketContext= React.createContext(null);

export const socketProvider = (props)=>{
    const socket=usememo(()=>io({
        host: 'localhost',
        port:8001,
    }),
    []
);

    return(
        <socketContext.Provider value={{socket}}>
            {props.children}
        </socketContext.Provider>
    )
}