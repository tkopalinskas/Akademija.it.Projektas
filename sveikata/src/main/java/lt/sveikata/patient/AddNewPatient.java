package lt.sveikata.patient;

import javax.persistence.Column;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("NewPatient")
public class AddNewPatient extends AddNewUser{


	@Column(unique = true)
	private long personalId;
	@NotNull
	private String firstName;
	@NotNull
	private String lastName;
	private String dateOfBirth;

  
	private String doctorsFullName;
	private String userName;
	private String password;

  
	// private List<Visit> listOfVisits;



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

	public String getDoctorsFullName() {
		return doctorsFullName;
	}

	public void setDoctorsFullName(String doctorsFullName) {
		this.doctorsFullName = doctorsFullName;
	}

	// public List<Visit> getListOfVisits() {
	// return listOfVisits;
	// }

}
