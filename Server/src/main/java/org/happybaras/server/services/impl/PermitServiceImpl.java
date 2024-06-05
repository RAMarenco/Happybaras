package org.happybaras.server.services.impl;

import org.happybaras.server.domain.dtos.PermitRegisterDTO;
import org.happybaras.server.domain.entities.*;
import org.happybaras.server.domain.enums.PermitStatusEnum;
import org.happybaras.server.domain.enums.PermitTypeEnum;
import org.happybaras.server.repositories.PermitRepository;
import org.happybaras.server.services.PermitService;
import org.happybaras.server.services.PermitStatusService;
import org.happybaras.server.services.PermitTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;

@Service
public class PermitServiceImpl implements PermitService {
    private final PermitRepository permitRepository;
    private final PermitStatusService permitStatusService;
    private final PermitTypeService permitTypeService;

    public PermitServiceImpl(PermitRepository permitRepository, PermitStatusService permitStatusService, PermitTypeService permitTypeService) {
        this.permitRepository = permitRepository;
        this.permitStatusService = permitStatusService;
        this.permitTypeService = permitTypeService;
    }

    @Override
    public void create(User visitor, User resident, House house, PermitRegisterDTO info) {
        Permit permit = new Permit();
        PermitStatus status = permitStatusService.findByValue(PermitStatusEnum.PENDING.value);
        PermitType type = permitTypeService.findByValue(info.getEntranceType());

        permit.setVisitor(visitor);
        permit.setResident(resident);
        permit.setHouse(house);
        permit.setType(type);
        permit.setStatus(status);
        permit.setBeginDate(LocalDate.parse(info.getBeginDate()));
        permit.setEndDate(LocalDate.parse(info.getEndDate()));
        permit.setBeginHour(LocalTime.parse(info.getBeginHour()));
        permit.setEndHour(LocalTime.parse(info.getEndHour()));
        permit.setDays(info.getDays());
        permit.setTimestamp(LocalDateTime.now());

        permitRepository.save(permit);
    }

    @Override
    public void approve(Permit permit) {
        PermitStatus status = permitStatusService.findByValue(PermitStatusEnum.APPROVED.value);
        permit.setStatus(status);

        permitRepository.save(permit);
    }

    @Override
    public void reject(Permit permit) {
        PermitStatus status = permitStatusService.findByValue(PermitStatusEnum.REJECTED.value);
        permit.setStatus(status);

        permitRepository.save(permit);
    }

    @Override
    public List<Permit> findByResident(User resident) {
        return permitRepository.findAllByResident(resident);
    }

    @Override
    public List<Permit> findLatestPermitRequestsByResident(User resident, LocalDateTime beginDate, LocalDateTime endDate) {
        return permitRepository.findAllByResidentAndTimestampBetween(resident, beginDate, endDate);
    }

//    TODO: implement pagination
    @Override
    public List<Permit> findByHouse(House house) {
        return permitRepository.findAllByHouse(house);
    }

    @Override
    public List<Permit> findLatestPermitRequestsByHouse(House house, LocalDateTime beginDate, LocalDateTime endDate) {
        return permitRepository.findAllByHouseAndTimestampBetween(house, beginDate, endDate);
    }

    @Override
    public List<Permit> findByVisitorAndStatusApproved(User visitor) {
        PermitStatus status = permitStatusService.findByValue(PermitStatusEnum.APPROVED.value);
        return permitRepository.findAllByVisitorAndStatus(visitor, status);
    }
}
