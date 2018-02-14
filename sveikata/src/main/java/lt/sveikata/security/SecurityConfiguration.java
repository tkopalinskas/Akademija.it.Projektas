//package lt.sveikata.security;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.builders.WebSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.web.authentication.SimpleUrlAuthenticationFailureHandler;
//import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
//
//
//@EnableWebSecurity
//@Configuration
//public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
//
//
//	@Autowired
//	private SecurityEntryPoint securityEntryPoint;
//	@Autowired
//
//	private UserDetailsService userService;
//
//	@Autowired
//	public void configureGlobal(AuthenticationManagerBuilder auth)
//	throws Exception {
//	auth.userDetailsService(userService);
//	auth.inMemoryAuthentication().withUser("adminas")
//	 .password("adminas").roles("ADMIN");
//	}

//	@Override
//	protected void configure(HttpSecurity http) throws Exception {
//
//		http.
//			authorizeRequests()
//			//be saugumo
//			.antMatchers("/","swagger-ui.html").permitAll()
//			.antMatchers("/admin/**/**","/user/**", "/#/**").hasRole("ADMIN");
//			.and()
//			.formLogin() // leidziam login
//			// prisijungus
//			.successHandler(new SimpleUrlAuthenticationSuccessHandler())
//			// esant blogiems user/pass
//			.failureHandler(new SimpleUrlAuthenticationFailureHandler())
//			.loginPage("/login").permitAll(); // jis jau egzistuoja !


	//}
	
//	@Override
//	public void configure(WebSecurity web) throws Exception {
//	    web
//	       .ignoring()
//	       .antMatchers("/resources/**", "/static/**", "/css/**", "/js/**", "/images/**");
//	}
//}