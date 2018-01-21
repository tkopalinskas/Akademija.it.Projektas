package lt.sveikata.patient;

import java.util.List;

import lt.sveikata.patientsHistory.Visit;

public class PatientForClient {

	private String firstName;
	private String lastName;
	private String dateOfBirth;
	private long personalId;
	private String doctorsFullName;
	//private boolean isNotSuspended;

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

//	public boolean isNotSuspended() {
//		return isNotSuspended;
//	}
//
//	public void setNotSuspended(boolean isNotSuspended) {
//		this.isNotSuspended = isNotSuspended;
//	}

	// public List<Visit> getListOfVisits() {
	// return listOfVisits;
	// }
	//
	// public void setListOfVisits(List<Visit> listOfVisits) {
	// this.listOfVisits = listOfVisits;
	// }

}
