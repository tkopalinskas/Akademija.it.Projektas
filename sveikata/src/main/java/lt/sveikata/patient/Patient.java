package lt.sveikata.patient;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import lt.sveikata.doctor.Doctor;
import lt.sveikata.user.User;

@Entity
@Table(name = "PATIENT")
@PrimaryKeyJoinColumn(name = "patientId")
//@DiscriminatorValue("Patient")
public class Patient extends User {

	@Column(unique = true)
	private long personalId;
	@NotNull
	private String firstName;
	@NotNull
	private String lastName;
	private String dateOfBirth;

//	private String doctorsFullName;

    @ManyToOne
    @JoinColumn(name="doctorId")
	private Doctor doctor;


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

	public String getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(String dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	public long getPersonalId() {
		return personalId;
	}

	public void setPersonalId(long personalId) {
		this.personalId = personalId;
	}

	public Doctor getDoctor() {
		return doctor;
	}

	public void setDoctor(Doctor doctor) {
		this.doctor = doctor;
	}
	
}

