package lt.sveikata.pharmacist;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import lt.sveikata.prescriptionUses.UsesFact;
import lt.sveikata.user.User;

@Entity
@Table(name = "PHARMACIST")
@PrimaryKeyJoinColumn(name = "pharmacistId")
public class Pharmacist extends User {

	private String firstName;
	@NotNull
	private String lastName;
	@NotNull
	private String workplace;
	private String typeOfWorkplace;
	
	@JsonManagedReference(value="pharmacist")
	@OneToMany(mappedBy = "pharmacist")
	private List<UsesFact> usesFact;

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

	public List<UsesFact> getUsesFact() {
		return usesFact;
	}

	public void setUsesFact(List<UsesFact> usesFact) {
		this.usesFact = usesFact;
	}
	
	

}

