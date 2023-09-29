package entity

import (
	"gorm.io/gorm"
)

type Member struct {
	gorm.Model
	Username string `gorm:"uniqueIndex"`
	Password string
	Email    string `gorm:"uniqueIndex"`

	Requests []Request `gorm:"foreignKey:MemberID"`
}
