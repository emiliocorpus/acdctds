# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160814205500) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "amaris", force: :cascade do |t|
    t.integer  "games_played"
    t.integer  "games_started"
    t.integer  "receptions"
    t.integer  "receiving_yards"
    t.float    "average_receiving_yards"
    t.integer  "longest_reception"
    t.integer  "receiving_tds"
    t.integer  "rushing_attempts"
    t.integer  "rushing_yards"
    t.float    "average_rushing_yards"
    t.integer  "longest_rush"
    t.integer  "rushing_tds"
    t.integer  "fumbles"
    t.integer  "fumbles_lost"
    t.datetime "created_at",              null: false
    t.datetime "updated_at",              null: false
  end

  create_table "dereks", force: :cascade do |t|
    t.integer  "games_played"
    t.integer  "games_started"
    t.integer  "completed_passes"
    t.integer  "pass_attempts"
    t.float    "completion_percentage"
    t.integer  "passing_yards"
    t.float    "average_yards_per_pass"
    t.integer  "passing_touchdowns"
    t.integer  "interceptions"
    t.integer  "sacks"
    t.integer  "sack_yardage"
    t.float    "passer_rating"
    t.integer  "rushing_attempts"
    t.integer  "rushing_yards"
    t.float    "average_yards_per_rush"
    t.integer  "rushing_touchdowns"
    t.integer  "fumbles"
    t.integer  "fumbles_lost"
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

end
