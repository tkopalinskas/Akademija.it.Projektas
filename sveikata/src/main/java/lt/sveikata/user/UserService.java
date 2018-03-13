package lt.sveikata.user;



import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;



@Transactional
@Service
public class UserService implements UserDetailsService  {

	@Autowired
	private UserRepository userRepository;
	

	public List<UserForClient> receiveAllUsers() {
		List<User> usersFromDatabase = getUserRepository().findAll();
		List<UserForClient> usersForClient = usersFromDatabase.stream().map((user) -> {
			UserForClient use = new UserForClient();
			use.setUserId(user.getUserId());
			use.setUserName(user.getUserName());
			use.setSuspended(user.isSuspended());
	
			return use;
		}).collect(Collectors.toList());
		return usersForClient;
	}

	public UserRepository getUserRepository() {
		return userRepository;
	}

	public void setUserRepository(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	public void addNewUser(AddNewUser newUser) {
		User use= new User();
		use.setUserName(newUser.getUserName());
		use.setPassword(newUser.getPassword());
		use.setRole(newUser.getRole());
		use.setSuspended(use.isSuspended());
		userRepository.save(use);
		
	}

	public void updateUser(User user, Long id) {
		User use = userRepository.findOne(id);
		use.setUserName(user.getUserName());
		use.setPassword(user.getPassword());
		use.setRole(user.getRole());
		use.setSuspended(user.isSuspended());
		userRepository.save(use);
	}

	@Override
	public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
		User user = userRepository.findByUserName(userName);
		if (user == null)
		throw new UsernameNotFoundException(userName + " not found.");
		return new org.springframework.security.core.userdetails.User(
		user.getUserName(),
		user.getPassword(),
		AuthorityUtils.createAuthorityList(
		new String[] { "ROLE_" + user.getRole() }) );

	}
	
	public User findById(long userId) {
		return userRepository.findByUserId(userId);
	}


	public User  getUser(String userName){
		return userRepository.findByUserName(userName);
	}


}






