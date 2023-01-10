import { BaseApi } from "./BaseApi";
import {configuration} from "./util/apiConfiguration";
import {customFetch} from "./util/customFetch";
import {Publisher, PublisherControllerApi} from "./base";

class PublisherApi implements BaseApi<Publisher> {
    api = new PublisherControllerApi(configuration, configuration.basePath, customFetch);

    create(item: Publisher){
        return this.api.createUsingPOST2(item)
    }

    edit(id: number, item: Publisher){
        return this.api.editUsingPUT2(id, item)
    }

    findAll(){
        return this.api.getAllPublishersUsingGET()
    }

    delete(id: number){
        return this.api.deleteUsingDELETE2(id)
    }
}

export const publisherApi = new PublisherApi()