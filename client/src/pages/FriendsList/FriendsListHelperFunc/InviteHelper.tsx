
import { useEffect, useState } from "react";
import { person } from "./personHelper";
import { wsv } from "./WSV";

var thisAccountName = "Yuteng"


var data = ["kusa","kusa"]
var array_of_people:any[] = []
export function Invites()
{
    const[data,setData] = useState([]);

    useEffect(() => {
    (
        async () => {
            const response = await fetch(`http://127.0.0.1:8000/api/getFriendRequest/${thisAccountName}`)
            const data = await response.json();
            setData(data)
        }
    )();
    },[]);
    console.log(data)
    
    array_of_people = []

    for (var i = 0; i < data.length; i++)
    {
        array_of_people.push(person(data[i]))
        array_of_people.push(wsv())
    }
    
    console.log(array_of_people)
    return array_of_people
}




