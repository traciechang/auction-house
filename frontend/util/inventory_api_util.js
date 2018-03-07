export const updateInventory = inventory => (
    $.ajax({
        method: "PATCH",
        url: `api/inventories/${inventory.id}`,
        data: { inventory }
    })
);