package lt.sveikata.medicalRecords;

import java.io.IOException;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.core.JsonGenerationException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@Entity
public class AddNewVisit {

//	public AddNewVisit() {
//		super();
//	}
//
//	@JsonCreator
//	public AddNewVisit(String dateOfVisit) {
//		this.dateOfVisit = dateOfVisit;
//	}

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(unique = true)
	private long id;
	@NotNull
	@Column
	private String dateOfVisit;
	

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
	
	
	public String getDateOfVisit() {
		return dateOfVisit;
	}

	public void setDateOfVisit(String dateOfVisit) {
		this.dateOfVisit = dateOfVisit;
	}
//
//	public String getDateOfVisit() {
//		try {
//		 ObjectMapper mapper = new ObjectMapper();
//		 mapper.getDeserializationConfig().
//		    mapper.reader()
//		    .forType(AddNewVisit.class)
//		    .readValue(dateOfVisit);
//		} catch (JsonMappingException e) {
//		    e.printStackTrace();
//		} catch (JsonGenerationException ex) {
//		    ex.printStackTrace();
//		} catch (IOException exc) {
//		    exc.printStackTrace();
//		}
//		return dateOfVisit;
//	}
//
//	public void setDateOfVisit(String jsonInString) {
//		try {
//			ObjectMapper mapper = new ObjectMapper();
//			jsonInString=mapper.writeValueAsString(dateOfVisit);
//		} catch (JsonMappingException e) {
//		    e.printStackTrace();
//		} catch (JsonGenerationException ex) {
//		    ex.printStackTrace();
//		} catch (IOException exc) {
//		    exc.printStackTrace();
//		}
//		this.dateOfVisit = jsonInString;
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
