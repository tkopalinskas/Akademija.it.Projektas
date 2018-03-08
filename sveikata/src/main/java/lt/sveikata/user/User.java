package lt.sveikata.user;

import javax.persistence.*;

import org.hibernate.validator.constraints.NotBlank;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public class User  {

	@Column(unique = true)
	private String userName;
	@NotBlank
	private String password;
	private boolean isSuspended = false;
	private String role;

	 
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "user_id", updatable = false, nullable = false)
	private Long userId;

	public String getUserName() {
		return userName;
	}

	public long getUserId() {
		return userId;
	}

	public void setUserId(long userId) {
		this.userId = userId;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public boolean isSuspended() {
		return isSuspended;
	}

	public void setSuspended(boolean isSuspended) {
		this.isSuspended = isSuspended;
	}

}

