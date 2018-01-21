package lt.sveikata.user;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;



@Transactional
@Service
public class UserService  {

	@Autowired
	private UserRepository userRepository;
	

//	public List<UserForClient> receiveAllUsers() {
//		List<User> usersFromDatabase = getUserRepository().findAll();
//		List<UserForClient> usersForClient = usersFromDatabase.stream().map((user) -> {
//			UserForClient use = new UserForClient();
//			use.setUserName(user.getUserName());
//			use.setNotSuspended(use.isNotSuspended());
//			return use;
//		}).collect(Collectors.toList());
//		return usersForClient;
//	}

	public UserRepository getUserRepository() {
		return userRepository;
	}

	public void setUserRepository(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

//	public void addNewUser(AddNewUser newUser) {
//		User use= new User();
//		use.setUserName(newUser.getUserName());
//		use.setPassword(newUser.getPassword());
//		use.setRole(newUser.getRole());
//		use.setNotSuspended(use.isNotSuspended());
//		userRepository.save(use);

	public void updateUser(User user, Long id) {
		User use = userRepository.findOne(id);
		use.setUserName(user.getUserName());
		use.setPassword(user.getPassword());
		use.setRole(user.getRole());
		use.setNotSuspended(user.isNotSuspended());
		userRepository.save(use);
	}
}
