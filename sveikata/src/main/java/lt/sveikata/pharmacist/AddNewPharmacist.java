package lt.sveikata.pharmacist;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

@Entity
public class AddNewPharmacist {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(unique = true)
	private long id;
	@NotNull
	private String firstName;
	@NotNull
	private String lastName;
	@NotNull
	private String workplace;
	private String typeOfWorkplace;
	private String userName;
	private String password;
	// @NotNull
	// private boolean isNotSuspended;

	private final String codeOfUserRights = "2";

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

	public String getWorkplace() {
		return workplace;
	}

	public void setWorkplace(String workplace) {
		this.workplace = workplace;
	}

	public String getTypeOfWorkplace() {
		return typeOfWorkplace;
	}

	public void setTypeOfWorkplace(String typeOfWorkplace) {
		this.typeOfWorkplace = typeOfWorkplace;
	}

	// public boolean isNotSuspended() {
	// return isNotSuspended;
	// }
	//
	// public void setNotSuspended(boolean isNotSuspended) {
	// this.isNotSuspended = isNotSuspended;
	// }

	public String getCodeOfUserRights() {
		return codeOfUserRights;
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
}
