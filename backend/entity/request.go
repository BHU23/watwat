package entity

import (
	"time"
	"gorm.io/gorm"

)

type Request struct {
	gorm.Model
	Note  string 
	DateOfRequest string 
	TimeOfRequest time.Time
	DateOfApproved string
	TimeOfApproved time.Time

	EventID   *uint
	Event Event `gorm:"foreignKey:EventID"`

	CreatorID   *uint
	Creator Creator `gorm:"foreignKey:CreatorID"`

	MemberID   *uint
	Member Member `gorm:"foreignKey:MemberID"`

	StatusID *uint
	Status   Status `gorm:"foreignKey:StatusID"`
}