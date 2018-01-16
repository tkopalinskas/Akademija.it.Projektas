package lt.sveikata.doctor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

@Entity
public class Doctor {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(unique = true)
	private long id;
	private String firstName;
	private String lastName;
	private String specialization;
	// private String workplace;
	@Column(unique = true)
	private String userName;
	private String password;
	@NotNull
	private boolean isNotSuspended;

	private final String codeOfUserRights = "1";

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

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public boolean isNotSuspended() {
		return isNotSuspended;
	}

	public void setNotSuspended(boolean isNotSuspended) {
		this.isNotSuspended = isNotSuspended;
	}

	public String getCodeOfUserRights() {
		return codeOfUserRights;
	}
}
