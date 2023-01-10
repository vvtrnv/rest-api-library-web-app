import {Book} from "../../api/base";
import React, {useState} from "react";
import {BookForm} from "./BookForm";
import {Property} from "../Property";

interface Props {
    item: Book
    onEdit: (id?: number, item?: Book) => void
    onDelete: (id?: number) => void
}

export const BookCard: React.FC<Props> = ({ item, onEdit, onDelete  }) => {

    const [isEdit, setIsEdit] = useState(false)

    return (
        <div className="card">
            {isEdit ?
                <BookForm item={item} onSubmit={(newItem) => { onEdit(item.id, newItem); setIsEdit(false) }} />
                :
                <div className="card__main">

                    <Property title="Название:" value={item.name} />
                    <Property title="Год публикации:" value={item.publishYear} />
                    <Property title="Место публикации:" value={item.publishPlace} />

                    <Property title="Издатель:" value={item.publisherByBook?.name} />

                    <Property title="Авторы:" value={
                        <span>{item.authorsByBook?.map((itemFromCollection, idx) => <span key={itemFromCollection.id} className="card-item">{itemFromCollection.name}{`${idx !== (item.authorsByBook?.length ?? 0) - 1 ? ',' : ''} `}</span>)}</span>} />

                    <Property title="Рубрики:" value={
                        <span>{item.rubricsByBook?.map((itemFromCollection, idx) =>
                            <span key={itemFromCollection.id} className="card-item">{itemFromCollection.name}{`${idx !== (item.rubricsByBook?.length ?? 0) - 1 ? ',' : ''} `}
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