package com.lerhyd.dngame.config;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.oauth2.client.OAuth2ClientContext;
import org.springframework.security.oauth2.client.OAuth2RestTemplate;
import org.springframework.security.oauth2.client.resource.OAuth2ProtectedResourceDetails;
import org.springframework.security.oauth2.client.token.grant.code.AuthorizationCodeResourceDetails;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableOAuth2Client;


@SuppressWarnings("Duplicates")
@EnableOAuth2Client
@Configuration
public class VkClient {

    private String clientId = "6800985";
    private final String clientSecret = "RX5t8DiEWrQ6EdFiGjX2";
    private final String accessTokenUri = "https://oauth.vk.com/access_token";
    private final String userAuthorizationUri = "https://oauth.vk.com/authorize";
    private final String redirectUri = "http://localhost:1234/login/vk";


    @Bean(name = "vkResourceDetails")
    public OAuth2ProtectedResourceDetails vkResourceDetails() {
        AuthorizationCodeResourceDetails details = new AuthorizationCodeResourceDetails();
        details.setClientId(clientId);
        details.setClientSecret(clientSecret);
        details.setAccessTokenUri(accessTokenUri);
        details.setUserAuthorizationUri(userAuthorizationUri);
        details.setPreEstablishedRedirectUri(redirectUri);
        details.setUseCurrentUri(false);
        return details;
    }

    @Bean(name = "vkRestTemplate")
    public OAuth2RestTemplate vkRestTemplate(@Qualifier("vkResourceDetails") OAuth2ProtectedResourceDetails vkResourceDetails, OAuth2ClientContext context) {
        return new OAuth2RestTemplate(vkResourceDetails, context);
    }
}