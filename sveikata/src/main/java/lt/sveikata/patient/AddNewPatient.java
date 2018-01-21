package lt.sveikata.patient;

import javax.persistence.Column;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

import lt.sveikata.user.AddNewUser;

@Entity
@DiscriminatorValue("NewPatient")
public class AddNewPatient extends AddNewUser{


	@Column(unique = true)
	private long personalId;
	private String firstName;
	private String lastName;
	private String dateOfBirth;

//	private final String codeOfUserRights = "3";


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

	public String getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(String dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	public long getPersonalId() {
		return personalId;
	}

	public void setPersonalId(long personalId) {
		this.personalId = personalId;
	}

}
