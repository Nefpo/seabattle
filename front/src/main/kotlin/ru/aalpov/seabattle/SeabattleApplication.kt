package ru.aalpov.seabattle

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class SeabattleApplication

fun main(args: Array<String>) {
    runApplication<SeabattleApplication>(*args)
}
