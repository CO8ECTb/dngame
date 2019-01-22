package com.lerhyd.dngame.filters;

import com.fasterxml.jackson.databind.ObjectMapper;

import com.lerhyd.dngame.model.User;
import com.lerhyd.dngame.service.impl.AuthServiceImpl;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.jwt.Jwt;
import org.springframework.security.jwt.JwtHelper;
import org.springframework.security.oauth2.client.OAuth2RestTemplate;
import org.springframework.security.oauth2.common.OAuth2AccessToken;
import org.springframework.security.oauth2.common.exceptions.InvalidTokenException;
import org.springframework.security.oauth2.common.exceptions.OAuth2Exception;
import org.springframework.security.web.authentication.AbstractAuthenticationProcessingFilter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.*;
import java.util.stream.Collectors;

@SuppressWarnings("Duplicates")
public class GoogleOauthFilter extends AbstractAuthenticationProcessingFilter {

    private OAuth2RestTemplate restTemplate;

    private AuthServiceImpl authService;

    public GoogleOauthFilter(String defaultFilterProcessesUrl) {
        super(defaultFilterProcessesUrl);
        setAuthenticationManager(authenticationManagerNone());
    }


    @Override
    public Authentication attemptAuthentication(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse) throws AuthenticationException, IOException, ServletException {
        try {
            try {

                OAuth2AccessToken accessToken = restTemplate.getAccessToken();

                String idToken = accessToken.getAdditionalInformation().get("id_token").toString();

                Jwt token = JwtHelper.decode(idToken);

                Map<String, String> authInfo = new ObjectMapper().readValue(token.getClaims(), Map.class);

                String email = authInfo.get("email");

                User userEntity = authService.signIn(email).get();

                List<SimpleGrantedAuthority> authorities = userEntity
                        .getRoles()
                        .stream()
                        .map(e -> new SimpleGrantedAuthority(e.getRole()))
                        .collect(Collectors.toList());

                org.springframework.security.core.userdetails.User user = new org.springframework.security.core.userdetails.User(userEntity.getLogin(), userEntity.getPassword(), authorities);

                return new UsernamePasswordAuthenticationToken(user, null, user.getAuthorities());

            } catch (InvalidTokenException e) {
                throw new BadCredentialsException("Could not obtain user details from token", e);
            }
        } catch (OAuth2Exception e) {
            throw new BadCredentialsException("Error token", e);
        }


    }

    public OAuth2RestTemplate getRestTemplate() {
        return restTemplate;
    }

    public void setRestTemplate(OAuth2RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public AuthServiceImpl getAuthService() {
        return authService;
    }

    public void setAuthService(AuthServiceImpl authService) {
        this.authService = authService;
    }

    public AuthenticationManager authenticationManagerNone() {
        AuthenticationManager authenticationManager = authentication -> {
            throw new UnsupportedOperationException("No authentication should be done with this AuthenticationManager");
        };
        return authenticationManager;
    }
}