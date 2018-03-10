package lt.sveikata.patient;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.EqualsAndHashCode;
import lt.sveikata.doctor.Doctor;
import lt.sveikata.user.User;

@Entity
@Table(name = "PATIENT")
@EqualsAndHashCode(exclude = {"doctor"})
@PrimaryKeyJoinColumn(name = "patientId")
//@DiscriminatorValue("Patient")
public class Patient extends User {

	@Column(unique = true)
	private Long personalId;
	@NotNull
	private String firstName;
	@NotNull
	private String lastName;
	private String dateOfBirth;

//	private String doctorsFullName;

    @ManyToOne
    @JsonBackReference
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

	public Long getPersonalId() {
		return personalId;
	}

	public void setPersonalId(Long personalId) {
		this.personalId = personalId;
	}

	public Doctor getDoctor() {
		return doctor;
	}

	public void setDoctor(Doctor doctor) {
		this.doctor = doctor;
	}


	
}

