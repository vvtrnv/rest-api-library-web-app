import {Stock} from "../../api/base";
import React, {useState} from "react";
import {StockForm} from "./StockForm";
import {Property} from "../Property";

interface Props {
    item: Stock
    onEdit: (id?: number, item?: Stock) => void
    onDelete: (id?: number) => void
}

export const StockCard: React.FC<Props> = ({ item, onEdit, onDelete  }) => {

    const [isEdit, setIsEdit] = useState(false)

    return (
        <div className="card">
            {isEdit ?
                <StockForm item={item} onSubmit={(newItem) => { onEdit(item.inventoryId, newItem); setIsEdit(false) }} />
                :
                <div className="card__main">
                    <Property title="Инвентарный номер:" value={item.inventoryId} />
                    <Property title="Название книги:" value={item.bookByBookId?.name} />
                </div>
            }
            <div className="card__controls">
                <button className="button" onClick={() => setIsEdit(!isEdit)}>{isEdit ? 'Закрыть' : 'Редактировать'}</button>
                <button className="button button_red" onClick={() => onDelete(item.inventoryId)}>Удалить</button>
            </div>
        </div>
    )
}