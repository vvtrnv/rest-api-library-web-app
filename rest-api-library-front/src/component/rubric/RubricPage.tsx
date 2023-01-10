import {useEntities} from "../../util/useEntities";
import {rubricApi} from "../../api/RubricApi";
import {useState} from "react";
import {Rubric} from "../../api/base";
import {RubricForm} from "./RubricForm";
import {RubricCard} from "./RubricCard";

export const RubricPage: React.FC = () => {
    const [rubrics, _, refresh] = useEntities(rubricApi)

    const [addFormShow, setAddFormShow] = useState(false)

    const onAddSubmit = (item: Rubric) => {
        rubricApi.create(item).finally(refresh)
        setAddFormShow(false)
    }

    const onEdit = (id?: number, item?: Rubric) => {
        if (!id || !item) return
        rubricApi.edit(id, item).finally(refresh)
    }

    const onDelete = (id?: number) => {
        if (!id) return
        rubricApi.delete(id).finally(refresh)
    }
    return (
        <div className="page">
            <div className="container-card">
                <button className="button" onClick={() => setAddFormShow(!addFormShow)}>{`${addFormShow ? 'Закрыть' : 'Добавить'}`}</button>
                {addFormShow &&
                    <RubricForm onSubmit={onAddSubmit} />
                }
            </div>
            <div>
                {rubrics?.map(c => <RubricCard key={c.id} item={c} onEdit={onEdit} onDelete={onDelete} />)}
            </div>
        </div>
    )
}