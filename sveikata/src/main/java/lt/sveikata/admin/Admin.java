package lt.sveikata.admin;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

@Entity
public class Admin {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(unique = true)
	private long id;
	private String firstName;
	private String lastName;
	@Column(unique = true)
	private String userName;
	private String password;
	//private String userType = "admin";
	@NotNull
	private boolean isNotSuspended;

	private final String codeOfUserRights = "0";

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

//	public String getUserType() {
//		return userType;
//	}
//
//	public void setUserType(String userType) {
//		this.userType = userType;
//	}

	public String getUserName() {
		return userName;
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

	public boolean isNotSuspended() {
		return isNotSuspended;
	}

	public void setNotSuspended(boolean isNotSuspended) {
		isNotSuspended=false;
		this.isNotSuspended = isNotSuspended;
	}

	public String getCodeOfUserRights() {
		return codeOfUserRights;
	}
}
