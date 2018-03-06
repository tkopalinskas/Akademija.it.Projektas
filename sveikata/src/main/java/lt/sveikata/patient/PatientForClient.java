package lt.sveikata.patient;


import lt.sveikata.doctor.Doctor;

public class PatientForClient {
	
	private Long personalId;

	private String firstName;
	private String lastName;
	private String dateOfBirth;
	private String role;
	private String userName;
	private boolean isSuspended;
	private String doctorsFullName;

	private Doctor doctor;


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

	public Long getPersonalId() {
		return personalId;
	}

	public void setPersonalId(Long personalId) {
		this.personalId = personalId;
	}

	public Doctor getDoctor() {
		return doctor;
	}

	public void setDoctor(Doctor doctor) {
		this.doctor = doctor;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public boolean isSuspended() {
		return isSuspended;
	}

	public void setSuspended(boolean suspended) {
		isSuspended = suspended;
	}

	public String getDoctorsFullName() {
		return doctorsFullName;
	}

	public void setDoctorsFullName(String doctorsFullName) {
		this.doctorsFullName = doctorsFullName;
	}
}

