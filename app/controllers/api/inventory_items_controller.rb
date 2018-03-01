class Api::InventoryItemsController < ApplicationController
    def update
        @inventory_item = InventoryItem.find(params[:id])
        @user = current_user

        if @inventory_item.update(inventory_item_params)
            render "api/users/show"
        else
            render json: @inventory_item, status: :unprocessable_entity
        end
    end

    private
    def inventory_item_params
        params.require(:inventory_item).permit(:for_sale)
    end
end
