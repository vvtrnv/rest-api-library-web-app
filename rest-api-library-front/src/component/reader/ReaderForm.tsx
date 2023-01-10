import {useEntities} from "../../util/useEntities";
import React, {useState} from "react";
import {Property} from "../Property";
import {Reader} from "../../api/base";
import {stockApi} from "../../api/StockApi";


interface Props {
    item?: Reader
    onSubmit: (item: Reader) => void
}

export const ReaderForm: React.FC<Props> = ({item, onSubmit}) => {

    const [booksFromStock] = useEntities(stockApi)

    // properties
    const [name, setName] = useState(item?.name ?? '')
    const [middlename, setMiddlename] = useState(item?.middlename ?? '')
    const [lastname, setLastname] = useState(item?.lastname ?? '')
    const [libraryCard, setLibraryCard] = useState(item?.libraryCard ?? '')
    const [phone, setPhone] = useState(item?.phone ?? '')
    const [address, setAddress] = useState(item?.address ?? '')
    const [dateReg, setDateReg] = useState(item?.dateReg ?? '')
    const [dateRereg, setDateRereg] = useState(item?.dateRereg ?? '')

    // * - *
    const [selectBooksFromStock, setSelectBooksFromStock] = useState<string[]>(item?.booksByReader?.map(o => o.inventoryId?.toString() ?? '') ?? [])


    const onClick = () => {
        if (name === null) return
        onSubmit({
            name,
            middlename,
            lastname,
            libraryCard,
            phone,
            address,
            dateReg,
            dateRereg,
            booksByReader: booksFromStock?.filter(os => !!selectBooksFromStock.find(so => so === os.inventoryId?.toString() ?? '-1'))
        })
        setName('')
        setMiddlename('')
        setLastname('')
        setLibraryCard('')
        setPhone('')
        setAddress('')
        setDateReg('')
        setDateRereg('')
        setSelectBooksFromStock([])
    }
    return (
        <div className="property__list">
            <Property title="Читательский билет:" value={<input type="text" value={libraryCard} onChange={e => setLibraryCard(e.target.value)} />} />
            <Property title="Имя:" value={<input type="text" value={name} onChange={e => setName(e.target.value)} />} />
            <Property title="Фамилия:" value={<input type="text" value={lastname} onChange={e => setLastname(e.target.value)} />} />
            <Property title="Отчество:" value={<input type="text" value={middlename} onChange={e => setMiddlename(e.target.value)} />} />
            <Property title="Телефон:" value={<input type="text" value={phone} onChange={e => setPhone(e.target.value)} />} />
            <Property title="Адрес:" value={<input type="text" value={address} onChange={e => setAddress(e.target.value)} />} />
            <Property title="Дата регистрации:" value={<input type="text" value={dateReg} onChange={e => setDateReg(e.target.value)} />} />
            <Property title="Дата перерегистрации:" value={<input type="text" value={dateRereg} onChange={e => setDateRereg(e.target.value)} />} />

            <Property title="Книги у читателя:">
                <select multiple value={selectBooksFromStock}
                        onChange={e => setSelectBooksFromStock(Array.from(e.target.selectedOptions, option => option.value))}>
                    {booksFromStock?.map(m => <option key={m.inventoryId}
                                               value={m.inventoryId}>{m.inventoryId}</option>)}
                </select>
            </Property>
            <button className="button button_green" onClick={onClick}>Ок</button>
        </div>
    )
}