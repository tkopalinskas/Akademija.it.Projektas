package lt.sveikata.pharmacist;

import javax.persistence.Entity;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import lt.sveikata.user.User;

@Entity
@Table(name = "PHARMACIST")
@PrimaryKeyJoinColumn(name = "pharmacistId")
// @DiscriminatorValue("Pharmacist")
public class Pharmacist extends User {

	private String firstName;
	@NotNull
	private String lastName;
	@NotNull
	private String workplace;
	private String typeOfWorkplace;

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

}

