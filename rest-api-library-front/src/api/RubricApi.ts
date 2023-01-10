import { BaseApi } from "./BaseApi";
import {configuration} from "./util/apiConfiguration";
import {customFetch} from "./util/customFetch";
import {Rubric, RubricControllerApi} from "./base";

class RubricApi implements BaseApi<Rubric> {
    api = new RubricControllerApi(configuration, configuration.basePath, customFetch);

    create(item: Rubric){
        return this.api.createUsingPOST4(item)
    }

    edit(id: number, item: Rubric){
        return this.api.editUsingPUT4(id, item)
    }

    findAll(){
        return this.api.getAllRubricsUsingGET()
    }

    delete(id: number){
        return this.api.deleteUsingDELETE4(id)
    }
}

export const rubricApi = new RubricApi()