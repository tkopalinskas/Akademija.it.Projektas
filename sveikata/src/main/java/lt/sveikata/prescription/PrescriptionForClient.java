package lt.sveikata.prescription;

public class PrescriptionForClient {

	// private String nameOfHealthInstitution;
	private String doctorsFullName;
	private int prescriptionDate;
	// private String patientsName;
	private String patientsPersonalCode;
	private int validUntil;
	private String activeIngredient;
	private String amountPerDose;
	private String units;
	private String description;

	public String getDoctorsFullName() {
		return doctorsFullName;
	}

	public void setDoctorsFullName(String doctorsFullName) {
		this.doctorsFullName = doctorsFullName;
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
