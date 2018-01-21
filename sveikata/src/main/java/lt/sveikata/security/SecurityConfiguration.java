//package lt.sveikata.security;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.builders.WebSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//
//import lombok.Value;
//
//@EnableWebSecurity
//@Configuration
//public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
//	
////	 @Value("${jwt.route.authentication.path}")
////	    private String authPath;
////	 
//	 
//	    @Autowired
//	    public void configureAuthentication(AuthenticationManagerBuilder authenticationManagerBuilder) throws Exception {
//	        authenticationManagerBuilder
//	            .userDetailsService(userDetailsService())
//	            .passwordEncoder(new BCryptPasswordEncoder());
//	    }
//
//
//
//
////	@Override
////	protected void configure(AuthenticationManagerBuilder auth)
////			throws Exception {
////		auth.
////			jdbcAuthentication()
////				.usersByUsernameQuery(usersQuery)
////				.authoritiesByUsernameQuery(rolesQuery)
////				.dataSource(dataSource)
////				.passwordEncoder(bCryptPasswordEncoder);
////	}
////	
//
//	@Override
//	protected void configure(HttpSecurity http) throws Exception {
//		
//		http.
//			authorizeRequests()
//				.antMatchers("/h2/**").permitAll()
//				.antMatchers("/").permitAll()
//				.antMatchers("/login").permitAll()
//				.antMatchers("/admin/**").hasAuthority("ADMIN").anyRequest()
//				.authenticated().and().csrf().disable().formLogin()
//				.loginPage("/login").failureUrl("/login?error=true")
////				.defaultSuccessUrl("/admin/home")
//				.usernameParameter("username")
//				.passwordParameter("password")
//				.and().logout();
////				.logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
////				.logoutSuccessUrl("/").and().exceptionHandling()
////				.accessDeniedPage("/access-denied");
//	}
//	
//	@Override
//	public void configure(WebSecurity web) throws Exception {
//	    web
//	       .ignoring()
//	       .antMatchers("/resources/**", "/static/**", "/css/**", "/js/**", "/images/**");
//	}
//	
//
//}
