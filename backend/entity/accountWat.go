package entity

import (
	"time"

	"gorm.io/gorm"
)

type AccountWat struct {
	gorm.Model
	Step   string
	SentAt time.Time

	WatID *uint
	Wat    Wat `gorm:"foreignKeyID:WatID"`
}
