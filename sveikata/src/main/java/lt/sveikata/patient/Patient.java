package lt.sveikata.patient;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

@Entity
public class Patient {

	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	@Id
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
	//@NotNull
	//private boolean isNotSuspended;

	private final String codeOfUserRights = "3";

	// private List<Visit> listOfVisits;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
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

	public long getPersonalId() {
		return personalId;
	}

	public void setPersonalId(long personalId) {
		this.personalId = personalId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getDoctorsFullName() {
		return doctorsFullName;
	}

	public void setDoctorsFullName(String doctorsFullName) {
		this.doctorsFullName = doctorsFullName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

//	public boolean isNotSuspended() {
//		return isNotSuspended;
//	}
//
//	public void setNotSuspended(boolean isNotSuspended) {
//		this.isNotSuspended = isNotSuspended;
//	}

	public String getCodeOfUserRights() {
		return codeOfUserRights;
	}

	// public List<Visit> getListOfVisits() {
	// return listOfVisits;
	// }
	//
	// public void setListOfVisits(List<Visit> listOfVisits) {
	// this.listOfVisits = listOfVisits;
	// }
}
