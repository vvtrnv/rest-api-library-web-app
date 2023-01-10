import { BaseApi } from "./BaseApi";
import {configuration} from "./util/apiConfiguration";
import {customFetch} from "./util/customFetch";
import {Book, BookControllerApi} from "./base";

class BookApi implements BaseApi<Book> {
    api = new BookControllerApi(configuration, configuration.basePath, customFetch);

    create(item: Book){
        return this.api.createUsingPOST1(item)
    }

    edit(id: number, item: Book){
        return this.api.editUsingPUT1(item, id)
    }

    findAll(){
        return this.api.getAllBooksUsingGET()
    }

    delete(id: number){
        return this.api.deleteUsingDELETE1(id)
    }
}

export const bookApi = new BookApi()