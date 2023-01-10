import {Rubric} from "../../api/base";
import React, {useState} from "react";
import {RubricForm} from "./RubricForm";
import {Property} from "../Property";

interface Props {
    item: Rubric
    onEdit: (id?: number, item?: Rubric) => void
    onDelete: (id?: number) => void
}

export const RubricCard: React.FC<Props> = ({ item, onEdit, onDelete  }) => {

    const [isEdit, setIsEdit] = useState(false)

    return (
        <div className="card">
            {isEdit ?
                <RubricForm item={item} onSubmit={(newItem) => { onEdit(item.id, newItem); setIsEdit(false) }} />
                :
                <div className="card__main">
                    <Property title="Название рубрики:" value={item.name} />
                    <Property title="УДК идентификатор:" value={item.udkId} />
                </div>
            }
            <div className="card__controls">
                <button className="button" onClick={() => setIsEdit(!isEdit)}>{isEdit ? 'Закрыть' : 'Редактировать'}</button>
                <button className="button button_red" onClick={() => onDelete(item.id)}>Удалить</button>
            </div>
        </div>
    )
}