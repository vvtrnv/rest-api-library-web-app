import {Reader} from "../../api/base";
import React, {useState} from "react";
import {ReaderForm} from "./ReaderForm";
import {Property} from "../Property";

interface Props {
    item: Reader
    onEdit: (id?: number, item?: Reader) => void
    onDelete: (id?: number) => void
}

export const ReaderCard: React.FC<Props> = ({ item, onEdit, onDelete  }) => {

    const [isEdit, setIsEdit] = useState(false)

    return (
        <div className="card">
            {isEdit ?
                <ReaderForm item={item} onSubmit={(newItem) => { onEdit(item.id, newItem); setIsEdit(false) }} />
                :
                <div className="card__main">
                    <Property title="Читательский билет:" value={item.libraryCard}/>
                    <Property title="Имя:" value={item.name} />
                    <Property title="Фамилия:" value={item.lastname} />
                    <Property title="Отчество:" value={item.middlename} />
                    <Property title="Телефон:" value={item.phone} />
                    <Property title="Адрес:" value={item.address} />
                    <Property title="Дата регистрации:" value={item.dateReg} />
                    <Property title="Дата перерегистрации:" value={item.dateRereg} />

                    <Property title="Книги у читателя:" value={
                        <span>{item.booksByReader?.map((itemFromCollection, idx) =>
                            <span key={itemFromCollection.inventoryId} className="card-item">{itemFromCollection.inventoryId}{`${idx !== (item.booksByReader?.length ?? 0) - 1 ? ',' : ''} `}
                        </span>)}
                    </span>} />

                </div>
            }
            <div className="card__controls">
                <button className="button" onClick={() => setIsEdit(!isEdit)}>{isEdit ? 'Закрыть' : 'Редактировать'}</button>
                <button className="button button_red" onClick={() => onDelete(item.id)}>Удалить</button>
            </div>
        </div>
    )
}