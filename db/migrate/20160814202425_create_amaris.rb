class CreateAmaris < ActiveRecord::Migration
  def change
    create_table :amaris do |t|
      t.integer :games_played
      t.integer :games_started
      t.integer :receptions
      t.integer :receiving_yards
      t.float :average_receiving_yards
      t.integer :longest_reception
      t.integer :receiving_tds
      t.integer :rushing_attempts
      t.integer :rushing_yards
      t.float :average_rushing_yards
      t.integer :longest_rush
      t.integer :rushing_tds
      t.integer :fumbles
      t.integer :fumbles_lost

      t.timestamps null: false
    end
  end
end
