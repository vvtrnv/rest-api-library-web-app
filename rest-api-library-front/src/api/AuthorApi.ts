import { BaseApi } from "./BaseApi";
import {configuration} from "./util/apiConfiguration";
import {customFetch} from "./util/customFetch";
import {Author, AuthorControllerApi} from "./base";

class AuthorApi implements BaseApi<Author> {
    api = new AuthorControllerApi(configuration, configuration.basePath, customFetch);

    create(item: Author){
        return this.api.createUsingPOST(item)
    }

    edit(id: number, item: Author){
        return this.api.editUsingPUT(item, id)
    }

    findAll(){
        return this.api.getAllAuthorsUsingGET()
    }

    delete(id: number){
        return this.api.deleteUsingDELETE(id)
    }
}

export const authorApi = new AuthorApi()