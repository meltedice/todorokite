class ChangeItemsNameAndNoteNotNull < ActiveRecord::Migration[5.1]
  def change
    change_column_null :items, :name, false, ''
    change_column_null :items, :note, false, ''
  end
end
