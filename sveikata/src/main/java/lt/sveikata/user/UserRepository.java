package lt.sveikata.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import lt.sveikata.user.User;

@Repository
public interface UserRepository  extends JpaRepository<User, Long>{
	
	User findByUserName(String userName);
//	User findByRole(String role);
//	AndUsedOnIsNull
}
