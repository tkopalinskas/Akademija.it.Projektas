package lt.sveikata.doctor;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.validation.constraints.NotNull;

import lt.sveikata.user.AddNewUser;

@Entity
@DiscriminatorValue("NewDoctor")
public class AddNewDoctor extends AddNewUser {

	private String firstName;
	@NotNull
	private String lastName;
	private String specialization;

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