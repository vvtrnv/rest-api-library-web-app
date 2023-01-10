import {Rubric} from "../../api/base";
import React, {useState} from "react";
import {Property} from "../Property";

interface Props {
    item?: Rubric
    onSubmit: (item: Rubric) => void
}

export const RubricForm: React.FC<Props> = ({ item, onSubmit }) => {

    const [name, setName] = useState(item?.name ?? '')
    const [udkId, setUdkID] = useState(item?.udkId ?? '')

    const onClick = () => {
        if (name === '') return
        onSubmit({
            name,
            udkId
        })
        setName('')
        setUdkID('')
    }

    return (
        <div className="property__list">
            <Property title="Название рубрики:"
                      value={<input type="text" value={name} onChange={e => setName(e.target.value)}/>}/>
            <Property title="УДК идентификатор:"
                      value={<input type="text" value={udkId} onChange={e => setUdkID(e.target.value)}/>}/>
            <button className="button button_green" onClick={onClick}>Ок</button>
        </div>
    )

}