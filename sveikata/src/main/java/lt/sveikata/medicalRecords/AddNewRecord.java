package lt.sveikata.medicalRecords;

import java.util.Calendar;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

@Entity
public class AddNewRecord {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(unique = true)
	private long id;
	@NotNull
//	private Calendar dateOfVisit;
	private String illnessTLKCode;
	@NotNull
	private String doctorsFullName;
	private int lengthOfVisit;
	private String description;
	private boolean isCompensated;
	private boolean visitIsRepeated;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

//	public Calendar getDateOfVisit() {
//		return dateOfVisit;
//	}
//
//	public void setDateOfVisit(Calendar calendar) {
//		this.dateOfVisit = calendar;
//	}

	public String getIllnessTLKCode() {
		return illnessTLKCode;
	}

	public void setIllnessTLKCode(String illnessTLKCode) {
		this.illnessTLKCode = illnessTLKCode;
	}

	public String getDoctorsFullName() {
		return doctorsFullName;
	}

	public void setDoctorsFullName(String doctorsFullName) {
		this.doctorsFullName = doctorsFullName;
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
