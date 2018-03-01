import * as InventoryItemAPIUtil from "../util/inventory_item_api_util";
import { receiveCurrentUser } from "./session_actions";

export const updateInventoryItem = inventoryItem => dispatch => (
    InventoryItemAPIUtil.updateInventoryItem(inventoryItem).then(response => dispatch(receiveCurrentUser(response)))
);