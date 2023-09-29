package entity

import (
	"gorm.io/gorm"

)

type Place struct {
	gorm.Model
	PlaceName  string `gorm:"uniqueIndex"`

	PlaceUseHasPlaces []PlaceUseHasPlace `gorm:"foreignKey:PlaceID"`
}