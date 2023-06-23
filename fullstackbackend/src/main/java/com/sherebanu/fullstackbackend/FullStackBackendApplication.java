package com.sherebanu.fullstackbackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories("com.sherebanu.fullstackbackend")
@ComponentScan(basePackages = { "com.sherebanu.fullstackbackend" })
@EntityScan("com.sherebanu.fullstackbackend")   

public class FullStackBackendApplication {
	public static void main(String[] args) {
		SpringApplication.run(FullStackBackendApplication.class, args);
	}

}
