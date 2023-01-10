import {useEntities} from "../../util/useEntities";
import {publisherApi} from "../../api/PublisherApi";
import {useState} from "react";
import {Publisher} from "../../api/base";
import {PublisherForm} from "./PublisherForm";
import {PublisherCard} from "./PublisherCard";

export const PublisherPage: React.FC = () => {
    const [publishers, _, refresh] = useEntities(publisherApi)

    const [addFormShow, setAddFormShow] = useState(false)

    const onAddSubmit = (item: Publisher) => {
        publisherApi.create(item).finally(refresh)
        console.log("TEST" + item.name + " " + item.id)
        setAddFormShow(false)
    }

    const onEdit = (id?: number, item?: Publisher) => {
        if (!id || !item) return
        publisherApi.edit(id, item).finally(refresh)
    }

    const onDelete = (id?: number) => {
        if (!id) return
        publisherApi.delete(id).finally(refresh)
    }
    return (
        <div className="page">
            <div className="container-card">
                <button className="button" onClick={() => setAddFormShow(!addFormShow)}>{`${addFormShow ? 'Закрыть' : 'Добавить'}`}</button>
                {addFormShow &&
                    <PublisherForm onSubmit={onAddSubmit} />
                }
            </div>
            <div>
                {publishers?.map(c => <PublisherCard key={c.id} item={c} onEdit={onEdit} onDelete={onDelete} />)}
            </div>
        </div>
    )
}