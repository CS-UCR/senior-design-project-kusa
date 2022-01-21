
import { person } from "./personHelper";
import { wsv } from "./WSV";

var data: any[] = []
var array_of_people:any[] = []
export function friends()
{
    array_of_people = []
    for (var i = 0; i < data.length; i++)
    {
        array_of_people.push(person(data[i]))
        array_of_people.push(wsv())
    }
    return array_of_people
}

export function getFriends(name:any)
{
    data.push(name)
}

// export function friends(friend:any)
// {
    
    
//     array_of_people.push(person(friend))
//     array_of_people.push(wsv())
//     return array_of_people
    
    
// }

