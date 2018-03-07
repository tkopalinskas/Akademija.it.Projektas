package lt.sveikata.medicalRecords;

import java.util.List;
import java.util.stream.Collectors;
//import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Service
public class RecordService {

	@Autowired
	private RecordRepository visitRepository;

	public List<RecordForClient> receiveAllVisits() {
		List<Record> visitsFromDatabase = getVisitRepository().findAllByOrderByDateOfVisitDesc();
		List<RecordForClient> visitsForClient = visitsFromDatabase.stream().map((visit) -> {
			RecordForClient vfc = new RecordForClient();
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

	public void addNewVisit(AddNewRecord newVisit) {
		Record vis = new Record();
		vis.setDateOfVisit(newVisit.getDateOfVisit());
		vis.setIllnessTLKCode(newVisit.getIllnessTLKCode());
		vis.setDoctorsFullName(newVisit.getDoctorsFullName());
		vis.setLengthOfVisit(newVisit.getLengthOfVisit());
		vis.setDescription(newVisit.getDescription());
		vis.setCompensated(newVisit.isCompensated());
		vis.setVisitIsRepeated(newVisit.isVisitIsRepeated());
		visitRepository.save(vis);

	}

	public RecordRepository getVisitRepository() {
		return visitRepository;
	}

	public void setVisitRepository(RecordRepository visitRepository) {
		this.visitRepository = visitRepository;
	}

	// public LocalDate getCurrentDate() {
	// return dateOfVisit;
	// }
	//
	// public void setCurrentDate(LocalDate dateOfVisit) {
	// dateOfVisit=LocalDate.now();
	// this.dateOfVisit = dateOfVisit;
	// }

	//
	// public void updateVisit(Record visit, Long id) {
	// Record vis = visitRepository.findOne(id);
	// //vis.setDateOfVisit(Calendar.getInstance());
	// vis.setIllnessTLKCode(visit.getIllnessTLKCode());
	// vis.setLengthOfVisit(visit.getLengthOfVisit());
	// vis.setDescription(visit.getDescription());
	// vis.setCompensated(visit.isCompensated());
	// vis.setVisitIsRepeated(visit.isVisitIsRepeated());
	// visitRepository.save(visit);
	// }
}
