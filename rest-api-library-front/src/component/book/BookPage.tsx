import {useEntities} from "../../util/useEntities";
import {bookApi} from "../../api/BookApi";
import {useState} from "react";
import {Book} from "../../api/base";
import {BookForm} from "./BookForm";
import {BookCard} from "./BookCard";

export const BookPage: React.FC = () => {
    const [books, _, refresh] = useEntities(bookApi)
    const [addFormShow, setAddFormShow] = useState(false)

    const onAddSubmit = (item: Book) => {
        bookApi.create(item).finally(refresh)
        setAddFormShow(false)
    }

    const onEdit = (id?: number, item?: Book) => {
        if (!id || !item) return
        bookApi.edit(id, item).finally(refresh)
    }

    const onDelete = (id?: number) => {
        if (!id) return
        bookApi.delete(id).finally(refresh)
    }

    return (
        <div className="staff-page">
            <div className="card">
                <button className="button" onClick={() => setAddFormShow(!addFormShow)}>{`${addFormShow ? 'Закрыть' : 'Добавить'}`}</button>
                {addFormShow &&
                    <BookForm onSubmit={onAddSubmit} />
                }
            </div>
            <div>
                {books?.map(c => <BookCard key={c.id} item={c} onEdit={onEdit} onDelete={onDelete} />)}
            </div>
        </div>
    )
}