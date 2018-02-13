package lt.sveikata.admin;


import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

import lt.sveikata.user.User;

@Entity
@DiscriminatorValue("Admin")
public class Admin extends User {

	
	
	private String firstName;
	private String lastName;
	private String userName;
	private String role;

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

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getRole() {
		return role;
	}


	public void setRole() {
		this.role = "Admin";
	}

}
