
import { useEffect, useState } from "react";
import { Person_New_Request } from "./friendRequestPersonHelper";
import { wsv } from "./WSV";

var thisAccountName = "GamerFive"


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
        array_of_people.push(Person_New_Request(data[i]))
        array_of_people.push(wsv())
    }
    
    console.log(array_of_people)
    return array_of_people
}




