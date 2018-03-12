package lt.sveikata.prescriptionUses;

import java.time.LocalDate;

public class UsesFactsForClient {


	private String prescriptionUsesDate;
	private String pharmacistsFullName;
	private int timesUsed;

	public String getPrescriptionUsesDate() {
		return prescriptionUsesDate;
	}

	public void setPrescriptionUsesDate(String prescriptionUsesDate) {
		this.prescriptionUsesDate = prescriptionUsesDate;
	}

	public String getPharmacistsFullName() {
		return pharmacistsFullName;
	}

	public void setPharmacistsFullName(String pharmacistsFullName) {
		this.pharmacistsFullName = pharmacistsFullName;
	}

	public int getTimesUsed() {
		return timesUsed;
	}

	public void setTimesUsed(int timesUsed) {
		this.timesUsed = timesUsed;
	}
}
