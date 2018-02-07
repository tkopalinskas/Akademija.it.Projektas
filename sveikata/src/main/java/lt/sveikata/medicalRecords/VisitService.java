package lt.sveikata.medicalRecords;

import java.util.List;
import java.util.stream.Collectors;
import java.util.Calendar;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Service
public class VisitService {

	@Autowired
	private VisitRepository visitRepository;

	public List<VisitForClient> receiveAllVisits() {
		List<Visit> visitsFromDatabase = getVisitRepository().findAll();
		List<VisitForClient> visitsForClient = visitsFromDatabase.stream().map((visit) -> {
			VisitForClient vfc = new VisitForClient();
			//vfc.setDateOfVisit(Calendar.getInstance());
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

	public VisitRepository getVisitRepository() {
		return visitRepository;
	}

	public void setVisitRepository(VisitRepository visitRepository) {
		this.visitRepository = visitRepository;
	}

	public void addNewVisit(AddNewVisit newVisit) {
		Visit vis = new Visit();
		//vis.setDateOfVisit(Calendar.getInstance());
		vis.setIllnessTLKCode(newVisit.getIllnessTLKCode());
		vis.setDoctorsFullName(newVisit.getDoctorsFullName());
		vis.setLengthOfVisit(newVisit.getLengthOfVisit());
		vis.setDescription(newVisit.getDescription());
		vis.setCompensated(newVisit.isCompensated());
		vis.setVisitIsRepeated(newVisit.isVisitIsRepeated());
		visitRepository.save(vis);

	}
//
//	public void deletePrescription(Long id) {
//		prescriptionRepository.delete(id);
//	}

	public void updateVisit(Visit visit, Long id) {
		Visit vis = visitRepository.findOne(id);
		//vis.setDateOfVisit(Calendar.getInstance());
		vis.setIllnessTLKCode(visit.getIllnessTLKCode());
		vis.setLengthOfVisit(visit.getLengthOfVisit());
		vis.setDescription(visit.getDescription());
		vis.setCompensated(visit.isCompensated());
		vis.setVisitIsRepeated(visit.isVisitIsRepeated());
		visitRepository.save(visit);
	}
}
