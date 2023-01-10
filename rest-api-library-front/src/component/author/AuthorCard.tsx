import {Author} from "../../api/base";
import React, {useState} from "react";
import {AuthorForm} from "./AuthorForm";
import {Property} from "../Property";

interface Props {
    item: Author
    onEdit: (id?: number, item?: Author) => void
    onDelete: (id?: number) => void
}

export const AuthorCard: React.FC<Props> = ({ item, onEdit, onDelete  }) => {

    const [isEdit, setIsEdit] = useState(false)

    return (
        <div className="card">
            {isEdit ?
                <AuthorForm item={item} onSubmit={(newItem) => { onEdit(item.id, newItem); setIsEdit(false) }} />
                :
                <div className="card__main">

                    <Property title="Имя автора:" value={item.name} />
                </div>
            }
            <div className="card__controls">
                <button className="button" onClick={() => setIsEdit(!isEdit)}>{isEdit ? 'Закрыть' : 'Редактировать'}</button>
                <button className="button button_red" onClick={() => onDelete(item.id)}>Удалить</button>
            </div>
        </div>
    )
}