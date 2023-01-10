import {Stock} from "../../api/base";
import {useEntities} from "../../util/useEntities";
import React, {useState} from "react";
import {Property} from "../Property";
import {bookApi} from "../../api/BookApi";

interface Props {
    item?: Stock
    onSubmit: (item: Stock) => void
}

export const StockForm: React.FC<Props> = ({item, onSubmit}) => {

    const [books] = useEntities(bookApi)

    // properties
    const [inventoryId, setInventoryId] = useState<number>(item?.inventoryId ?? 0)


    // 1 - *
    const [selectBook, setSelectBook] = useState<string[]>(books?.map(o => o.id?.toString() ?? '') ?? [])

    const onClick = () => {
        if (inventoryId === 0) return
        onSubmit({
            inventoryId,
            bookByBookId: books?.find(st => !!selectBook.find(ts => ts === st.id?.toString() ?? '-1')) ?? item?.bookByBookId,
        })

        setInventoryId(0)
        setSelectBook([])
    }
    return (
        <div className="property__list">
            <Property title="Инвентарный номер:" value={<input type="number" value={inventoryId} onChange={e => setInventoryId(Number(e.target.value))} />} />
            <Property title="Издатель:">
                <select value={selectBook}
                        onChange={e => setSelectBook(Array.from(e.target.selectedOptions, option => option.value))}>
                    {books?.map(m => <option key={m.id}
                                                 value={m.id}>{m?.name}</option>)}
                </select>
            </Property>
            <button className="button button_green" onClick={onClick}>Ок</button>
        </div>
    )
}