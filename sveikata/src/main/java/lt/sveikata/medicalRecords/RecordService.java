package lt.sveikata.medicalRecords;

import java.util.List;
import java.util.stream.Collectors;
//import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lt.sveikata.doctor.Doctor;
import lt.sveikata.doctor.DoctorRepository;
import lt.sveikata.patient.Patient;
import lt.sveikata.patient.PatientRepository;
import lt.sveikata.prescription.AddNewPrescription;
import lt.sveikata.prescription.Prescription;

@Transactional
@Service
public class RecordService {

	@Autowired
	private RecordRepository recordRepository;

	@Autowired
	private PatientRepository patientRepository;

	@Autowired
	private DoctorRepository doctorRepository;

	public List<RecordForClient> receiveAllVisits() {
		List<Record> visitsFromDatabase = getRecordRepository().findAllByOrderByDateOfVisitDesc();
		List<RecordForClient> visitsForClient = visitsFromDatabase.stream().map((visit) -> {
			RecordForClient vfc = new RecordForClient();
			vfc.setRecordId(visit.getRecordId());
			vfc.setDateOfVisit(visit.getDateOfVisit());
			vfc.setIllnessTLKCode(visit.getIllnessTLKCode());
			vfc.setDoctorsFullName(visit.getDoctorsFullName());
			vfc.setLengthOfVisit(visit.getLengthOfVisit());
			vfc.setDescription(visit.getDescription());
			vfc.setCompensated(visit.isCompensated());
			vfc.setVisitIsRepeated(visit.isVisitIsRepeated());
			return vfc;
		}).collect(Collectors.toList());
		return visitsForClient;
	}

	/* receives info about a single prescription found by it's number */
	public Record receiveRecordInfo(long recordId) {
		Record record = recordRepository.findByRecordId(recordId);
		return record;
	}

	public void addNewVisit(AddNewRecord newVisit) {

	}

	public void addNewRecord(AddNewRecord newRecord, long personalId, long doctorId) {
		Record vis = new Record();
		vis.setDateOfVisit(newRecord.getDateOfVisit());
		vis.setIllnessTLKCode(newRecord.getIllnessTLKCode());
		vis.setDoctorsFullName(newRecord.getDoctorsFullName());
		vis.setLengthOfVisit(newRecord.getLengthOfVisit());
		vis.setDescription(newRecord.getDescription());
		vis.setCompensated(newRecord.isCompensated());
		vis.setVisitIsRepeated(newRecord.isVisitIsRepeated());
		Patient patient = patientRepository.findByPersonalId(personalId);
		vis.setPatient(patient);
		Doctor doc = doctorRepository.findOneByUserId(doctorId);
		vis.setDoctor(doc);
		recordRepository.save(vis);
	}

	public List<Record> getUserRecordsByUserId(long patientId) {
		return recordRepository.getPatientRecordsByUserId(patientId);
	}

	public RecordRepository getRecordRepository() {
		return recordRepository;
	}

	public void setVisitRepository(RecordRepository recordtRepository) {
		this.recordRepository = recordRepository;
	}

}
