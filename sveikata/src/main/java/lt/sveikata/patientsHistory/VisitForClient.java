package lt.sveikata.patientsHistory;

public class VisitForClient {

	private int dateOfVisit;
	private String illnessTLKCode;
	private String doctorsFullName;
	private int lengthOfVisit;
	private String description;
	private boolean isCompensated;
	private boolean visitIsRepeated;

	public int getDateOfVisit() {
		return dateOfVisit;
	}

	public void setDateOfVisit(int dateOfVisit) {
		this.dateOfVisit = dateOfVisit;
	}

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
