package ru.aalpov.mainsite.model

class Warship(
    private val size: Int,
    val coordinates: ArrayList<Pair<Byte, Byte>>
) {
    private val decks = MutableList(size) { true }
    fun fire(deck: Int): Boolean {
        return if (size > deck) {
            decks[deck] = false; true
        } else false
    }
}
