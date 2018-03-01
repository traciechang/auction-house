export const updateInventoryItem = inventory_item => (
    $.ajax({
        method: "PATCH",
        url: `api/inventory_items/${inventory_item.id}`,
        data: {inventory_item}
    })
);