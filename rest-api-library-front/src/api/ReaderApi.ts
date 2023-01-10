import { BaseApi } from "./BaseApi";
import {configuration} from "./util/apiConfiguration";
import {customFetch} from "./util/customFetch";
import {Reader, ReaderControllerApi} from "./base";

class ReaderApi implements BaseApi<Reader> {
    api = new ReaderControllerApi(configuration, configuration.basePath, customFetch);

    create(item: Reader){
        return this.api.createUsingPOST3(item)
    }

    edit(id: number, item: Reader){
        return this.api.editUsingPUT3(id, item)
    }

    findAll(){
        return this.api.getAllReaderUsingGET()
    }

    delete(id: number){
        return this.api.deleteUsingDELETE3(id)
    }
}

export const readerApi = new ReaderApi()