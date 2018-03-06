export const updateInventory = inventory => {
console.log("in inventory api util")
console.log(inventory)
return (
    $.ajax({
        method: "PATCH",
        url: `api/inventories/${inventory.id}`,
        data: { inventory }
    })
)};