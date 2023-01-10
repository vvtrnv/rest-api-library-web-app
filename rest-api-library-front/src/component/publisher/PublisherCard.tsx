import {Publisher} from "../../api/base";
import React, {useState} from "react";
import {PublisherForm} from "./PublisherForm";
import {Property} from "../Property";

interface Props {
    item: Publisher
    onEdit: (id?: number, item?: Publisher) => void
    onDelete: (id?: number) => void
}

export const PublisherCard: React.FC<Props> = ({ item, onEdit, onDelete  }) => {

    const [isEdit, setIsEdit] = useState(false)

    return (
        <div className="card">
            {isEdit ?
                <PublisherForm item={item} onSubmit={(newItem) => { onEdit(item.id, newItem); setIsEdit(false) }} />
                :
                <div className="card__main">
                    <Property title="Имя издателя:" value={item.name} />
                </div>
            }
            <div className="card__controls">
                <button className="button" onClick={() => setIsEdit(!isEdit)}>{isEdit ? 'Закрыть' : 'Редактировать'}</button>
                <button className="button button_red" onClick={() => onDelete(item.id)}>Удалить</button>
            </div>
        </div>
    )
}