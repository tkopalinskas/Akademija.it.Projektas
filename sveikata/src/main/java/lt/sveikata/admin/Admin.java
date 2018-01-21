package lt.sveikata.admin;


import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

import lt.sveikata.user.User;

@Entity
@DiscriminatorValue("Admin")
public class Admin extends User {

	
	
	private String firstName;
	private String lastName;

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

}
