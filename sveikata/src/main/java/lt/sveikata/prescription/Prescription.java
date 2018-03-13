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

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import lt.sveikata.doctor.Doctor;
import lt.sveikata.patient.Patient;
import lt.sveikata.prescriptionUses.UsesFact;

@Entity
public class Prescription {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(unique = true)
	private long prescriptionId;
	private String prescriptionDate;
	private String validUntil;
	private String activeIngredient;
	private String amountPerDose;
	private String units;
	private String description;
	private int timesUsed;
	private long number;
	private int totalAmount;
	private String totalUnits;

	@JsonManagedReference
	@OneToMany(mappedBy = "prescription")
	private List<UsesFact> usesFact;

	@ManyToOne
	@JsonBackReference
	@JoinColumn(name = "patientId")
	private Patient patient;

	@ManyToOne
	@JsonBackReference
	@JoinColumn(name = "doctorId")
	private Doctor doctor;

	public List<UsesFact> getUsesFact() {
		return usesFact;
	}

	public void setUsesFact(List<UsesFact> usesFact) {
		this.usesFact = usesFact;
	}

	public long getPrescriptionId() {
		return prescriptionId;
	}

	public void setPrescriptionId(long prescriptionId) {
		this.prescriptionId = prescriptionId;
	}

	public Patient getPatient() {
		return patient;
	}

	public void setPatient(Patient patient) {
		this.patient = patient;
	}

	public Doctor getDoctor() {
		return doctor;
	}

	public void setDoctor(Doctor doctor) {
		this.doctor = doctor;
	}

	public long getNumber() {
		return number;
	}

	public void setNumber(long number) {
		this.number = number;
	}

	public String getPrescriptionDate() {
		return prescriptionDate;
	}

	public void setPrescriptionDate(String prescriptionDate) {
		this.prescriptionDate = prescriptionDate;
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
