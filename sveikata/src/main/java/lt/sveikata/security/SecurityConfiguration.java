
package lt.sveikata.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationFailureHandler;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;

import lt.sveikata.user.UserService;


@EnableWebSecurity
@Configuration
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {


//	@Autowired
//	private SecurityEntryPoint securityEntryPoint;
//	
//	@Autowired
//	private UserService userService;


	@Override
	protected void configure(HttpSecurity http) throws Exception {

		http.
			authorizeRequests()
		
			.antMatchers("/","swagger-ui.html").permitAll()
			.antMatchers("/console/**").permitAll()
//			.antMatchers("/admin/**").hasRole("ADMIN")
//			.antMatchers("/patient/**").hasRole("PATIENT")
			.antMatchers("/pharmacist/**").hasRole("PHARMACIST")
			.antMatchers("/doctor/**").hasRole("DOCTOR")
			.and()
			.formLogin()

			.successHandler(new SimpleUrlAuthenticationSuccessHandler())
			// esant blogiems user/pass
			.failureHandler(new SimpleUrlAuthenticationFailureHandler()).loginPage("/").permitAll()
			.and()
			.logout().permitAll()
			.and()
			.csrf()
			.disable()
			.exceptionHandling()
			//.authenticationEntryPoint(securityEntryPoint)
			.and()
			.headers()
			.frameOptions()
			.disable();
}

	@Override
	public void configure(WebSecurity web) throws Exception {
	    web
	       .ignoring()
	       .antMatchers("/resources/**", "/static/**", "/css/**", "/js/**", "/images/**");
	}
}

