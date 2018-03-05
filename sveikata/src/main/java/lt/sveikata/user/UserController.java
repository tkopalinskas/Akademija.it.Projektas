package lt.sveikata.user;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
//import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping(value = "/user")
public class UserController {

	@Autowired
	private UserService userService;
	

	@Autowired
	private UserRepository userRepository;

//	@PreAuthorize("hasRole('ADMIN')")
	@RequestMapping(value = "/allUsers", method = RequestMethod.GET)
	public List<UserForClient> giveAllUser() {
		return getUserService().receiveAllUsers();
	}
//	@PreAuthorize("hasRole('ADMIN')")
	@RequestMapping(value = "/admin/addNewUser", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public void createUser(@RequestBody final AddNewUser newUser) {
		userService.addNewUser(newUser);
	}
//	@PreAuthorize("hasRole('ADMIN')")
	@PutMapping("/user/{id}")
	public ResponseEntity<User> updateUser(@PathVariable(value = "id") Long id, @Valid @RequestBody User userDetails) {

		User user = userRepository.findOne(id);
		// if (user == null) {
		// return ResponseEntity.notFound().build();
		// }
//		user.setRole("SUSPENDED");
		user.setSuspended(true);

		User updatedUser = userRepository.save(user);
		return ResponseEntity.ok(updatedUser);
	}

//	@RequestMapping(/*value = "/admin/findUser/manageUser", */path = "/{id}", method = RequestMethod.DELETE)
//	@ResponseStatus(HttpStatus.NO_CONTENT)
//	public void deleteAdminFromDatabase(@PathVariable final Long id) {
//		userService.deleteUser(id);
//	}
//	@PreAuthorize("hasRole('ADMIN')")
	@RequestMapping(value = "/admin/findUser/manageUser/{id=7}", method = RequestMethod.PATCH)
	@ResponseStatus(HttpStatus.CREATED)
	public void updateExistingAdmin(@RequestBody final User user, @PathVariable final Long id) {
		userService.updateUser(user, id);
	}

	public UserService getUserService() {
		return userService;
	}

	public void setUserService(UserService userService) {
		this.userService = userService;
	}
}