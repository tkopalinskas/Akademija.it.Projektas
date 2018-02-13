package lt.sveikata.doctor;

public class DoctorForClient {

	private String firstName;
	private String lastName;
//	private String doctorsFullName;
	private String specialization;
	private String userName;
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

//	public String getDoctorsFullName() {
//		return doctorsFullName;
//	}
//
//	public void setDoctorsFullName(String doctorsFullName) {
//		this.doctorsFullName = doctorsFullName;
//	}

	public String getSpecialization() {
		return specialization;
	}

	public void setSpecialization(String specialization) {
		this.specialization = specialization;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}
}

