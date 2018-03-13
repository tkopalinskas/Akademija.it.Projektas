package lt.sveikata.doctor;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.OneToMany;
import javax.validation.constraints.NotNull;

import lt.sveikata.medicalRecords.Record;
import lt.sveikata.medicalRecords.RecordForClient;
import lt.sveikata.patient.Patient;
import lt.sveikata.patient.PatientForClient;
import lt.sveikata.prescription.Prescription;
import lt.sveikata.prescription.PrescriptionForClient;
import lt.sveikata.user.UserForClient;

public class DoctorForClient implements Serializable{


	private String firstName;
	private String lastName;
	private String specialization;
	private String userName;
	private String role;
	private boolean isSuspended;

   
	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getSpecialization() {
		return specialization;
	}

	public void setSpecialization(String specialization) {
		this.specialization = specialization;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public boolean isSuspended() {
		return isSuspended;
	}

	public void setSuspended(boolean suspended) {
		isSuspended = suspended;
	}
}
