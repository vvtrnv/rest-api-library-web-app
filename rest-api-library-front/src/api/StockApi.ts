import { BaseApi } from "./BaseApi";
import {configuration} from "./util/apiConfiguration";
import {customFetch} from "./util/customFetch";
import {Stock, StockControllerApi} from "./base";

class StockApi implements BaseApi<Stock> {
    api = new StockControllerApi(configuration, configuration.basePath, customFetch);

    create(item: Stock){
        return this.api.createUsingPOST5(item)
    }

    edit(id: number, item: Stock){
        return this.api.editUsingPUT5(id, item)
    }

    findAll(){
        return this.api.getAllStockUsingGET()
    }

    delete(id: number){
        return this.api.deleteUsingDELETE5(id)
    }
}

export const stockApi = new StockApi()
