import {Book} from "../../api/base";
import {useEntities} from "../../util/useEntities";
import {publisherApi} from "../../api/PublisherApi";
import React, {useState} from "react";
import {Property} from "../Property";
import {authorApi} from "../../api/AuthorApi";
import {rubricApi} from "../../api/RubricApi";

interface Props {
    item?: Book
    onSubmit: (item: Book) => void
}

export const BookForm: React.FC<Props> = ({item, onSubmit}) => {

    const [publisher] = useEntities(publisherApi)
    const [authors] = useEntities(authorApi)
    const [rubrics] = useEntities(rubricApi)

    // properties
    const [name, setName] = useState(item?.name ?? '')
    const [publishYear, setPublishYear] = useState<number>(item?.publishYear ?? 0)
    const [publishPlace, setPublishPlace] = useState(item?.publishPlace ?? '')

    // 1 - *
    const [selectPublisher, setSelectPublisher] = useState<string[]>(publisher?.map(o => o.id?.toString() ?? '') ?? [])

    // * - *
    const [selectAuthors, setSelectAuthors] = useState<string[]>(item?.authorsByBook?.map(o => o.id?.toString() ?? '') ?? [])
    const [selectRubrics, setSelectRubrics] = useState<string[]>(item?.rubricsByBook?.map(o => o.id?.toString() ?? '') ?? [])


    const onClick = () => {
        if (publisher === null) return
        onSubmit({
            name,
            publishYear,
            publishPlace,
            publisherByBook: publisher?.find(st => !!selectPublisher.find(ts => ts === st.id?.toString() ?? '-1')) ?? item?.publisherByBook,
            authorsByBook: authors?.filter(os => !!selectAuthors.find(so => so === os.id?.toString() ?? '-1')),
            rubricsByBook: rubrics?.filter(os => !!selectRubrics.find(so => so === os.id?.toString() ?? '-1'))
        })
        setName('')
        setPublishYear(0)
        setPublishPlace('')
        setSelectPublisher([])
        setSelectAuthors([])
        setSelectRubrics([])
    }
    return (
        <div className="property__list">
            <Property title="Название:" value={<input type="text" value={name} onChange={e => setName(e.target.value)} />} />
            <Property title="Место публикации:" value={<input type="text" value={publishPlace} onChange={e => setPublishPlace(e.target.value)} />} />
            <Property title="Год публикации:" value={<input type="number" value={publishYear} onChange={e => setPublishYear(Number(e.target.value))} />} />
            <Property title="Издатель:">
                <select multiple={false} value={selectPublisher}
                        onChange={e => setSelectPublisher(Array.from(e.target.selectedOptions, option => option.value))}>
                    {publisher?.map(m => <option key={m.id}
                                             value={m.id}>{m?.name}</option>)}
                </select>
            </Property>
            <Property title="Авторы:">
                <select multiple={true} value={selectAuthors}
                        onChange={e => setSelectAuthors(Array.from(e.target.selectedOptions, option => option.value))}>
                    {authors?.map(m => <option key={m.id}
                                                 value={m.id}>{m.name}</option>)}
                </select>
            </Property>
            <Property title="Рубрики:">
                <select multiple={true} value={selectRubrics}
                        onChange={e => setSelectRubrics(Array.from(e.target.selectedOptions, option => option.value))}>
                    {rubrics?.map(m => <option key={m.id}
                                                       value={m.id}>{m.name}</option>)}
                </select>
            </Property>
            <button className="button button_green" onClick={onClick}>Ок</button>
        </div>
    )
}