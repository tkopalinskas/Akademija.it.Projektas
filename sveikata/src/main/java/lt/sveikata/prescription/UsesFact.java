package lt.sveikata.prescription;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class UsesFact {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(unique = true)
	private long usesFactId;
	

	private Date prescriptionUses;
	
	@ManyToOne
	@JoinColumn(name="prescriptionId")
	private Prescription prescription;
	
	

	public Prescription getPrescription() {
		return prescription;
	}


	public void setPrescription(Prescription prescription) {
		this.prescription = prescription;
	}


	public long getUsesFactId() {
		return usesFactId;
	}


	public void setUsesFactId(long usesFactId) {
		this.usesFactId = usesFactId;
	}


	public Date getPrescriptionUses() {
		return prescriptionUses;
	}


	public void setPrescriptionUses(Date prescriptionUses) {
		this.prescriptionUses = prescriptionUses;
	}	
	
}
