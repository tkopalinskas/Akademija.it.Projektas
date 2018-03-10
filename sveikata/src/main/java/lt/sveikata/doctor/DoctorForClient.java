package lt.sveikata.doctor;

import java.util.Set;

import javax.persistence.OneToMany;
import javax.validation.constraints.NotNull;

import lt.sveikata.medicalRecords.Record;
import lt.sveikata.medicalRecords.RecordForClient;
import lt.sveikata.patient.Patient;
import lt.sveikata.patient.PatientForClient;
import lt.sveikata.prescription.Prescription;
import lt.sveikata.user.UserForClient;

public class DoctorForClient {


	private String firstName;
	private String lastName;
	private String specialization;
	private String userName;
	private String role;
	private boolean isSuspended;


	private Set<RecordForClient> records;
	

	private Set<Prescription> prescriptions;
	
	private Set<PatientForClient>patients;


//   public void addPatient(Patient patient) {
//	   this.patients.add(patient);
//	   patient.setDoctor(this);
//   }
//   /*patient lenteleje bus doctor stulpelis - isorinis raktas i doctor.
//    * Patient yra savininkas,todel kiekviena karta pridedat nauja pascienta, 
//    * turi buti susiejamas gydytojas, kvieciant savininko metoda setDoctor();
//    */
//	
	
	
   
	public String getFirstName() {
		return firstName;
	}

	public Set<RecordForClient> getRecords() {
		return records;
	}

	public void setRecords(Set<RecordForClient> records) {
		this.records = records;
	}

	public Set<Prescription> getPrescriptions() {
		return prescriptions;
	}

	public void setPrescriptions(Set<Prescription> prescriptions) {
		this.prescriptions = prescriptions;
	}

	public Set<PatientForClient> getPatients() {
		return patients;
	}

	public void setPatients(Set<PatientForClient> patients) {
		this.patients = patients;
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
