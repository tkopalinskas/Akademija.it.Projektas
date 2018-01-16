package lt.sveikata.prescription;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Prescription {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(unique = true)
	private long id;
	// private String nameOfHealthInstitution;
	private String doctorsName;
	private int prescriptionDate;
	// private String patientsName;
	private String patientsPersonalCode;
	private int validUntil;
	private String activeIngredient;
	private String amountPerDose;
	private String units;
	private String description;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getDoctorsName() {
		return doctorsName;
	}

	public void setDoctorsName(String doctorsName) {
		this.doctorsName = doctorsName;
	}

	public int getPrescriptionDate() {
		return prescriptionDate;
	}

	public void setPrescriptionDate(int prescriptionDate) {
		this.prescriptionDate = prescriptionDate;
	}

	public String getPatientsPersonalCode() {
		return patientsPersonalCode;
	}

	public void setPatientsPersonalCode(String patientsPersonalCode) {
		this.patientsPersonalCode = patientsPersonalCode;
	}

	public int getValidUntil() {
		return validUntil;
	}

	public void setValidUntil(int validUntil) {
		this.validUntil = validUntil;
	}

	public String getActiveIngredient() {
		return activeIngredient;
	}

	public void setActiveIngredient(String activeIngredient) {
		this.activeIngredient = activeIngredient;
	}

	public String getAmountPerDose() {
		return amountPerDose;
	}

	public void setAmountPerDose(String amountPerDose) {
		this.amountPerDose = amountPerDose;
	}

	public String getUnits() {
		return units;
	}

	public void setUnits(String units) {
		this.units = units;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

}
