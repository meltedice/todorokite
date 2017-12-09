class V1::Items::CompletionsController < ApplicationController
  def update
    @item = Item.find(params[:item_id])
    if @item.complete!
      head :ok
    else
      render json: @item.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @item = Item.find(params[:item_id])
    if @item.uncomplete!
      head :ok
    else
      render json: @item.errors, status: :unprocessable_entity
    end
  end

  private

end
