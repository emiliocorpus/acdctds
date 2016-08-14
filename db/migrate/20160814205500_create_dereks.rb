class CreateDereks < ActiveRecord::Migration
  def change
    create_table :dereks do |t|
      t.integer :games_played
      t.integer :games_started
      t.integer :completed_passes
      t.integer :pass_attempts
      t.float :completion_percentage
      t.integer :passing_yards
      t.float :average_yards_per_pass
      t.integer :passing_touchdowns
      t.integer :interceptions
      t.integer :sacks
      t.integer :sack_yardage
      t.float :passer_rating
      t.integer :rushing_attempts
      t.integer :rushing_yards
      t.float :average_yards_per_rush
      t.integer :rushing_touchdowns
      t.integer :fumbles
      t.integer :fumbles_lost

      t.timestamps null: false
    end
  end
end
