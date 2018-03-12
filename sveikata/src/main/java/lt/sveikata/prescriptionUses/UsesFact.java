package lt.sveikata.prescriptionUses;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonBackReference;

import lt.sveikata.pharmacist.Pharmacist;
import lt.sveikata.prescription.Prescription;

@Entity
public class UsesFact {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(unique = true)
	private long usesFactId;

	// @Type(type = "date")
	private String prescriptionUsesDate;
	private int timesUsed;

	@ManyToOne
	@JoinColumn(name = "prescriptionId")
	private Prescription prescription;
	//
	// @ManyToOne
	// @JsonBackReference
	// @JoinColumn(name ="prescriptionId")
	// private Prescription prescription;

	@ManyToOne
	@JsonBackReference
	@JoinColumn(name = "pharmacistId")
	private Pharmacist pharmacist;

	public long getUsesFactId() {
		return usesFactId;
	}

	public void setUsesFactId(long usesFactId) {
		this.usesFactId = usesFactId;
	}

	public Prescription getPrescription() {
		return prescription;
	}

	public void setPrescription(Prescription prescription) {
		this.prescription = prescription;
	}

	public Pharmacist getPharmacist() {
		return pharmacist;
	}

	public void setPharmacist(Pharmacist pharmacist) {
		this.pharmacist = pharmacist;
	}

	public String getPrescriptionUsesDate() {
		return prescriptionUsesDate;
	}

	public void setPrescriptionUsesDate(String prescriptionUsesDate) {
		this.prescriptionUsesDate = prescriptionUsesDate;
	}

	public int getTimesUsed() {
		return timesUsed;
	}

	public void setTimesUsed(int timesUsed) {
		this.timesUsed = timesUsed;
	}

}
