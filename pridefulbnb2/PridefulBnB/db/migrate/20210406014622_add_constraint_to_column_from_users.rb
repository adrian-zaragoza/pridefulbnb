class AddConstraintToColumnFromUsers < ActiveRecord::Migration[5.2]
  def change
    change_column_null :users, :phone_number, false
  end
end
