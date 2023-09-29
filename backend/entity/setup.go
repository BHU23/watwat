package entity

import (
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var db *gorm.DB

func DB() *gorm.DB {
	return db
}

func SetupDatabease(){
	database, err := gorm.Open(sqlite.Open("watwat.db"), &gorm.Config{})
	if err != nil {
		panic("Failed to connect database")
	}

	database.AutoMigrate(
		&Member{},
		&Creator{},
		&Event{},
		&Request{},
		&EventType{},
		&Host{},
		&Place{},
		&PlaceUse{},
		&PlaceUseHasPlace{},
		&Status{},
	)
	db = database
}