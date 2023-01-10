import {useEntities} from "../../util/useEntities";
import {readerApi} from "../../api/ReaderApi";
import {useState} from "react";
import {Reader} from "../../api/base";
import {ReaderForm} from "./ReaderForm";
import {ReaderCard} from "./ReaderCard";

export const ReaderPage: React.FC = () => {
    const [readers, _, refresh] = useEntities(readerApi)
    const [addFormShow, setAddFormShow] = useState(false)

    const onAddSubmit = (item: Reader) => {
        readerApi.create(item).finally(refresh)
        setAddFormShow(false)
    }

    const onEdit = (id?: number, item?: Reader) => {
        if (!id || !item) return
        readerApi.edit(id, item).finally(refresh)
    }

    const onDelete = (id?: number) => {
        if (!id) return
        readerApi.delete(id).finally(refresh)
    }

    return (
        <div className="staff-page">
            <div className="card">
                <button className="button" onClick={() => setAddFormShow(!addFormShow)}>{`${addFormShow ? 'Закрыть' : 'Добавить'}`}</button>
                {addFormShow &&
                    <ReaderForm onSubmit={onAddSubmit} />
                }
            </div>
            <div>
                {readers?.map(c => <ReaderCard key={c.id} item={c} onEdit={onEdit} onDelete={onDelete} />)}
            </div>
        </div>
    )
}