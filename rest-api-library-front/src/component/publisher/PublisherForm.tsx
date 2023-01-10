import {Publisher} from "../../api/base";
import React, {useState} from "react";
import {Property} from "../Property";

interface Props {
    item?: Publisher
    onSubmit: (item: Publisher) => void
}

export const PublisherForm: React.FC<Props> = ({ item, onSubmit }) => {

    const [name, setName] = useState(item?.name ?? '')

    const onClick = () => {
        if (name === '') return
        onSubmit({
            name
        })
        setName('')
    }

    return (
        <div className="property__list">
            <Property title="Имя издателя:"
                      value={<input type="text" value={name} onChange={e => setName(e.target.value)}/>}/>
            <button className="button button_green" onClick={onClick}>Ок</button>
        </div>
    )

}