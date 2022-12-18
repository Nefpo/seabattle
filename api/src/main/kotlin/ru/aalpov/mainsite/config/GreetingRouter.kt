package ru.aalpov.mainsite.config

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.http.MediaType
import org.springframework.web.reactive.function.server.RequestPredicates
import org.springframework.web.reactive.function.server.RouterFunctions
import ru.aalpov.mainsite.handlers.GreetingHandler

@Configuration
class GreetingRouter {
    @Bean
    fun route(handler: GreetingHandler) = RouterFunctions.route(
        RequestPredicates.GET("/start")
            .and(RequestPredicates.accept(MediaType.TEXT_PLAIN)),
        handler::start
    )
}
