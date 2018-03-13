package lt.sveikata.user;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import lt.sveikata.user.User;

@Repository
public interface UserRepository  extends JpaRepository<User, Long>{
	
	User findByUserName(String userName);
	
     User findByUserId(Long userId);
//     
 	@Query("SELECT user FROM User user WHERE user.userId = :userId AND user.role =:userRole")
 	User getUserByUserId(@Param("userId") Long id, @Param("userRole")  String role);
 	
	public User findByUserNameAndPassword(String userName, String password);
	
//	public User findByUserIdAndRole(Long userId, String role);

	User findByUserIdAndRole(Long userId, String userRole);

//	User findByRole(String role);
//	AndUsedOnIsNull
}
