package lt.sveikata.doctor;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;


import lt.sveikata.user.User;

@Entity
@DiscriminatorValue("Doctor")
public class Doctor  extends User{


	private String firstName;
	@NotNull
	private String lastName;
	private String specialization;
	// private String workplace;


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

	public String getSpecialization() {
		return specialization;
	}

	public void setSpecialization(String specialization) {
		this.specialization = specialization;
	}

}
