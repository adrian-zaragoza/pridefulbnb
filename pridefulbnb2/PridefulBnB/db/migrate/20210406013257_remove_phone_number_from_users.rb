class RemovePhoneNumberFromUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :phone_number, :integer
    add_column :users, :phone_number, :string
  end
end
