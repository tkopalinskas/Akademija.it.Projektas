package lt.sveikata.medicalRecords;


import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;

import org.hibernate.annotations.Type;

import lt.sveikata.doctor.Doctor;
import lt.sveikata.patient.Patient;

@Entity
public class Record {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(unique = true)
	private long recordId;
	@NotNull
	@Column
	@Type(type="date")
	private Date dateOfVisit;
	private String illnessTLKCode;
	private int lengthOfVisit;
	private String description;
	private boolean isCompensated;
	private boolean visitIsRepeated;
	
	@ManyToOne
	@JoinColumn(name= "patientId")
	private Patient patient;

	
	@ManyToOne
    @JoinColumn(name="doctorId")
	private Doctor doctor;



	public long getRecordId() {
		return recordId;
	}


	public void setRecordId(long recordId) {
		this.recordId = recordId;
	}


	public Date getDateOfVisit() {
		return dateOfVisit;
	}


	public void setDateOfVisit(Date dateOfVisit) {
		this.dateOfVisit = dateOfVisit;
	}

	public String getIllnessTLKCode() {
		return illnessTLKCode;
	}

	public void setIllnessTLKCode(String illnessTLKCode) {
		this.illnessTLKCode = illnessTLKCode;
	}

	public int getLengthOfVisit() {
		return lengthOfVisit;
	}

	public void setLengthOfVisit(int lengthOfVisit) {
		this.lengthOfVisit = lengthOfVisit;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public boolean isCompensated() {
		return isCompensated;
	}

	public void setCompensated(boolean isCompensated) {
		this.isCompensated = isCompensated;
	}

	public boolean isVisitIsRepeated() {
		return visitIsRepeated;
	}

	public void setVisitIsRepeated(boolean visitIsRepeated) {
		this.visitIsRepeated = visitIsRepeated;
	}

}
