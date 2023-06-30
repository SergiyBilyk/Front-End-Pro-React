import { memo } from "react";

const List = (props) => {
    const {person} = props

    return (
        <ul>
            {person && person.map( i => <li key = {i.id} >{i.name}</li>)}
        </ul>
    )
}
export default memo(List)