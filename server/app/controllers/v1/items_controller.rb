class V1::ItemsController < ApplicationController
  def index
    @items = Item.all.order(:id)
  end

  def show
    @item = Item.find(params[:id])
  end

  def create
    @item = Item.new(item_params)

    if @item.save
      render :show, status: :created, location: v1_item_url(@item)
    else
      render json: @item.errors, status: :unprocessable_entity
    end
  end

  def update
    @item = Item.find(params[:id])
    if @item.update(item_params)
      render :show, status: :ok, location: v1_item_url(@item)
    else
      render json: @item.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @item = Item.find(params[:id])
    @item.destroy
  end

  private

  # Never trust parameters from the scary internet, only allow the white list through.
  def item_params
    params.require(:item).permit(:name, :note)
  end
end
