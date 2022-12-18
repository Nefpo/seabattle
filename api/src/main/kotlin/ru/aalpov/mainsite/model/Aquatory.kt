package ru.aalpov.mainsite.model

import ru.aalpov.mainsite.model.dto.WarshipDto

class Aquatory(
    val size: Pair<Byte, Byte>
) {
    private val ships = ArrayList<Warship>()
    fun addWarship(ship: WarshipDto) {
        ships.add(
            Warship(
                ship.coordinates.size,
                ship.coordinates as ArrayList
            )
        )
    }
    fun fire(coordinates: Pair<Byte, Byte>): Boolean {
        val ship = ships.firstOrNull { ship -> ship.coordinates.contains(coordinates) }
        return ship?.fire(ship.coordinates.indexOf(coordinates)) ?: false
    }
}
