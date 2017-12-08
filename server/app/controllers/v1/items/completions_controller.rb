class V1::Items::CompletionsController < ApplicationController
  before_action :set_item, only: [:update, :destroy]

  def update
    if @item.complete!
      head :ok
    else
      render json: @item.errors, status: :unprocessable_entity
    end
  end

  def destroy
    if @item.uncomplete!
      head :ok
    else
      render json: @item.errors, status: :unprocessable_entity
    end
  end

  private

  def set_item
    @item = Item.find(params[:item_id])
  end
end
