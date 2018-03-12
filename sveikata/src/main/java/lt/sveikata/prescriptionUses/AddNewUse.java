package lt.sveikata.prescriptionUses;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;


@Entity
public class AddNewUse {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(unique = true)
	private long usesFactId;

//	@Temporal(TemporalType.DATE)
	private Long prescriptionId;
	private String prescriptionUsesDate;

	private int timesUsed=0;
	
	
	public long getUsesFactId() {
		return usesFactId;
	}

	public void setUsesFactId(long usesFactId) {
		this.usesFactId = usesFactId;
	}

	public String getPrescriptionUsesDate() {
		return prescriptionUsesDate;
	}

	public void setPrescriptionUsesDate(String prescriptionUsesDate) {
		this.prescriptionUsesDate = prescriptionUsesDate;
	}

	public long getPrescriptionId() {
		return prescriptionId;
	}

	public void setPrescriptionId(long prescriptionId) {
		this.prescriptionId = prescriptionId;
	}

	public int getTimesUsed() {
		return timesUsed;
	}

	public void setTimesUsed(int timesUsed) {
		this.timesUsed = timesUsed;
	}

}
