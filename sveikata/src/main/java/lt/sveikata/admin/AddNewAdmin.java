package lt.sveikata.admin;


import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

import lt.sveikata.user.AddNewUser;

@Entity
@DiscriminatorValue("NewAdmin")
public class AddNewAdmin extends AddNewUser{


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
