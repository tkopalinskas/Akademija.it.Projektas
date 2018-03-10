package lt.sveikata.prescription;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import lt.sveikata.DTO.DoctorDTO;
import lt.sveikata.DTO.PatientDTO;
import lt.sveikata.doctor.Doctor;
import lt.sveikata.patient.Patient;

@Entity
public class AddNewPrescription {


	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(unique = true)
	private long prescriptionId;
	private String doctorsFullName;
	private String prescriptionDate;
	private Long personalId;
	private String validUntil;
	private String activeIngredient;
	private String amountPerDose;
	private String units;
	private String description;
	private int timesUsed = 0;
	private long number;
	private int totalAmount;
	private String totalUnits;

	public long getNumber() {
		return number;
	}

	public void setNumber(long prescriptionId) {
		this.number = prescriptionId;
	}

	public String getDoctorsFullName() {
		return doctorsFullName;
	}

	public void setDoctorsFullName(String firstName, String lastName) {
		this.doctorsFullName = firstName + " " + lastName;
	}

	public String getPrescriptionDate() {
		return prescriptionDate;
	}

	public void setPrescriptionDate(String prescriptionDate) {
		this.prescriptionDate = prescriptionDate;
	}

	public Long getPersonalId() {
		return personalId;
	}

	public void setPersonalId(Long personalId) {
		this.personalId = personalId;
	}

	public String getValidUntil() {
		return validUntil;
	}

	public void setValidUntil(String validUntil) {
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

	public int getTimesUsed() {
		return timesUsed;
	}

	public void setTimesUsed(int timesUsed) {
		this.timesUsed = timesUsed;
	}

	public int getTotalAmount() {
		return totalAmount;
	}

	public void setTotalAmount(int totalAmount) {
		this.totalAmount = totalAmount;
	}

	public String getTotalUnits() {
		return totalUnits;
	}

	public void setTotalUnits(String totalUnits) {
		this.totalUnits = totalUnits;
	}

}
