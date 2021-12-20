import { person } from "./personHelper";
import { wsv } from "./WSV";

var data = ["kusa","kusa"]
var array_of_people:any[] = []
export function blocked()
{
    array_of_people = []
    for (var i = 0; i < data.length; i++)
    {
        array_of_people.push(person(data[i]))
        array_of_people.push(wsv())
    }
    return array_of_people
}
