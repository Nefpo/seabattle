package ru.aalpov.mainsite.handlers

import org.springframework.http.MediaType
import org.springframework.stereotype.Component
import org.springframework.web.reactive.function.BodyInserters
import org.springframework.web.reactive.function.server.ServerRequest
import org.springframework.web.reactive.function.server.ServerResponse

@Component
class GreetingHandler {
    fun start(request: ServerRequest) = ServerResponse
        .ok()
        .contentType(MediaType.TEXT_PLAIN)
        .body(
            BodyInserters.fromValue("Start game")
        )
    fun index(request: ServerRequest) = ServerResponse
        .ok()
        .render(
            "index",
            mapOf("user" to "Vanya")
        )
}
