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

ActiveRecord::Schema.define(version: 20180115213424) do

  create_table "lines", force: :cascade do |t|
    t.text     "text"
    t.boolean  "auth_public", default: false
    t.integer  "count"
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
    t.integer  "payam_id"
    t.integer  "auth_id"
    t.index ["auth_id"], name: "index_lines_on_auth_id"
    t.index ["payam_id"], name: "index_lines_on_payam_id"
  end

  create_table "payams", force: :cascade do |t|
    t.integer  "counter",        default: 1, null: false
    t.string   "title"
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
    t.integer  "style_id"
    t.integer  "current_scribe"
    t.index ["style_id"], name: "index_payams_on_style_id"
  end

  create_table "styles", force: :cascade do |t|
    t.string   "name"
    t.boolean  "protected",  default: false
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.string   "username"
    t.string   "uid"
    t.string   "provider"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
