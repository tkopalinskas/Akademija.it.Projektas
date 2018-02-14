package lt.sveikata.prescription;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import lt.sveikata.doctor.Doctor;
import lt.sveikata.patient.Patient;

@Entity
public class Prescription {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(unique = true)
	private long prescriptionId;
	private Date prescriptionDate;
	private String patientsPersonalCode;
	private int validUntil;
	private String activeIngredient;
	private String amountPerDose;
	private String units;
	private String description;
	
	
	@OneToMany(mappedBy="prescription")
	private List<UsesFact>usesFact;
	
	
	@ManyToOne
	@JoinColumn(name ="patientId")
	private Patient patient;
	
	@ManyToOne
	@JoinColumn(name="doctorId")
	private Doctor doctor;
	

	public long getPrescriptionId() {
		return prescriptionId;
	}

	public void setPrescriptionId(long prescriptionId) {
		this.prescriptionId = prescriptionId;
	}

	public Date getPrescriptionDate() {
		return prescriptionDate;
	}

	public void setPrescriptionDate(Date prescriptionDate) {
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