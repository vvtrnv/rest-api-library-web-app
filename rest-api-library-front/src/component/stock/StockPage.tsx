import {useEntities} from "../../util/useEntities";
import {stockApi} from "../../api/StockApi";
import {useState} from "react";
import {Stock} from "../../api/base";
import {StockForm} from "./StockForm";
import {StockCard} from "./StockCard";

export const StockPage: React.FC = () => {
    const [booksFromStock, _, refresh] = useEntities(stockApi)
    const [addFormShow, setAddFormShow] = useState(false)

    const onAddSubmit = (item: Stock) => {
        stockApi.create(item).finally(refresh)
        setAddFormShow(false)
    }

    const onEdit = (id?: number, item?: Stock) => {
        if (!id || !item) return
        stockApi.edit(id, item).finally(refresh)
    }

    const onDelete = (id?: number) => {
        if (!id) return
        stockApi.delete(id).finally(refresh)
    }

    return (
        <div className="staff-page">
            <div className="card">
                <button className="button" onClick={() => setAddFormShow(!addFormShow)}>{`${addFormShow ? 'Закрыть' : 'Добавить'}`}</button>
                {addFormShow &&
                    <StockForm onSubmit={onAddSubmit} />
                }
            </div>
            <div>
                {booksFromStock?.map(c => <StockCard key={c.inventoryId} item={c} onEdit={onEdit} onDelete={onDelete} />)}
            </div>
        </div>
    )
}