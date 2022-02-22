
import { Person_FriendList } from "./friendListPersonHelper";
import { wsv } from "./WSV";
import * as React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const baseURL = "http://127.0.0.1:8000/api/getFriendList/";

var thisAccountName = "Yuteng"

var data: any[] = []
var array_of_people:any[] = []

export function Friends()
{

    const[data,setData] = useState([]);

    useEffect(() => {
    (
        async () => {
            const response = await fetch(`http://127.0.0.1:8000/api/getFriendList/${thisAccountName}` )
            const data = await response.json();
            setData(data)
            
        }
    )();
    },[]);
    console.log(data)
    
    array_of_people = []

    for (var i = 0; i < data.length; i++)
    {
        array_of_people.push(Person_FriendList(data[i]))
        array_of_people.push(wsv())
    }
    
    console.log(array_of_people)
    return array_of_people
    

}