class Api::InventoriesController < ApplicationController
    # def create
    #     @inventory = Inventory.new(inventory_params)

    #     if @inventory.save
    #         # ?
    #         render 'api/users/show'
    #     else
    #         render json: @inventory, status: :unprocessable_entity
    # end

    def update
        @inventory = Inventory.find(params[:id])

        if @inventory.update(inventory_params)
            render 'api/users/show'
        else
            render json: @inventory, status: :unprocessable_entity
        end
    end

    private
    def inventory_params
        params.require(:inventory).permit(:user_id, :gold)
    end
end
