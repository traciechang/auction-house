import * as InventoryAPIUtil from "../util/inventory_api_util";
import { receiveCurrentUser } from "./session_actions";

export const updateInventory = inventory => dispatch => (
    InventoryAPIUtil.updateInventory(inventory).then(response => (
        dispatch(receiveCurrentUser(response))
    ))
);