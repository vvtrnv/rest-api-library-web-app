import {useEntities} from "../../util/useEntities";
import {authorApi} from "../../api/AuthorApi";
import {useState} from "react";
import {Author} from "../../api/base";
import {AuthorForm} from "./AuthorForm";
import {AuthorCard} from "./AuthorCard";

export const AuthorPage: React.FC = () => {
    const [authors, _, refresh] = useEntities(authorApi)

    const [addFormShow, setAddFormShow] = useState(false)

    const onAddSubmit = (item: Author) => {
        authorApi.create(item).finally(refresh)
        setAddFormShow(false)
    }

    const onEdit = (id?: number, item?: Author) => {
        if (!id || !item) return
        authorApi.edit(id, item).finally(refresh)
    }

    const onDelete = (id?: number) => {
        if (!id) return
        authorApi.delete(id).finally(refresh)
    }
    return (
        <div className="page">
            <div className="container-card">
                <button className="button" onClick={() => setAddFormShow(!addFormShow)}>{`${addFormShow ? 'Закрыть' : 'Добавить'}`}</button>
                {addFormShow &&
                    <AuthorForm onSubmit={onAddSubmit} />
                }
            </div>
            <div>
                {authors?.map(c => <AuthorCard key={c.id} item={c} onEdit={onEdit} onDelete={onDelete} />)}
            </div>
        </div>
    )
}