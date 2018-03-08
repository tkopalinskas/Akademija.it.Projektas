package lt.sveikata.DTO;

import java.io.Serializable;


public class PatientDTO implements Serializable{
	

	private long personalId;
	private String firstName;
	private String lastName;
	private String dateOfBirth;
	
	public long getPersonalId() {
		return personalId;
	}
	public void setPersonalId(long personalId) {
		this.personalId = personalId;
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
	public String getDateOfBirth() {
		return dateOfBirth;
	}
	public void setDateOfBirth(String dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}
}