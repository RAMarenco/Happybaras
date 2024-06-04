package org.happybaras.server.controllers;

import jakarta.validation.Valid;
import org.happybaras.server.domain.dtos.GeneralResponse;
import org.happybaras.server.domain.dtos.RegisterEntryDTO;
import org.happybaras.server.domain.entities.Entry;
import org.happybaras.server.services.EntryService;
import org.happybaras.server.services.HouseService;
import org.happybaras.server.services.UserService;
import org.happybaras.server.utils.EntriesFilters;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/entry")
public class EntryController {
    private final EntryService entryService;
    private final UserService userService;
    private final HouseService houseService;
    private final EntriesFilters entriesFilters;
    public EntryController(EntryService entryService, UserService userService, HouseService houseService, EntriesFilters entriesFilters) {
        this.entryService = entryService;
        this.userService = userService;
        this.houseService = houseService;
        this.entriesFilters = entriesFilters;
    }

    @PostMapping("/register")
    public ResponseEntity<GeneralResponse> registerNewEntry(@RequestBody @Valid RegisterEntryDTO info) {
//        User user = userService.findOneByIdentifier(info.getIdentifier());
//        if(user == null)
//            return GeneralResponse.builder().status(HttpStatus.NOT_FOUND).getResponse();
//
//        House house = houseService.findByHouseNumber(info.getHouseNumber());
//        if(house == null)
//            return GeneralResponse.builder().status(HttpStatus.NOT_FOUND).getResponse();

//        User vigilant = userService.findOneByIdentifier()
//        if(vigilant == null)
//            return GeneralResponse.builder().status(HttpStatus.NOT_FOUND).getResponse();

//        entryService.registerEntry(user, house, user, info);
        return GeneralResponse.builder().status(HttpStatus.OK).message("Entrada creada").getResponse();
    }

    @GetMapping("/all")
    public ResponseEntity<GeneralResponse> getAll() {
        return GeneralResponse.builder().status(HttpStatus.OK).data(entryService.findAll()).getResponse();
    }

    @GetMapping("/byMonth")
    public ResponseEntity<GeneralResponse> getSumByMonths() {
        LocalDateTime now = LocalDateTime.now();
        LocalDateTime beginDate = LocalDateTime.of(now.getYear(), 1, 1, 0, 0); // year-1-1T00:00
        LocalDateTime endDate = LocalDateTime.of(now.getYear(), 12, 31, 23, 59); // year-12-31T23:59
        List<Entry> entries = entryService.findByPeriod(beginDate, endDate);

        return GeneralResponse.builder().data(entriesFilters.mapEntriesByMonths(entries)).status(HttpStatus.OK).getResponse();
    }

    @GetMapping("/byWeek")
    public ResponseEntity<GeneralResponse> getSumByWeek() {
        LocalDateTime now = LocalDateTime.now();
        LocalDateTime beginDate;
        LocalDateTime endDate;

        // When Monday the dashboard will show only the entries of Monday
        // It will be showing the entries of each day of the week until it reaches Sunday and then the cycle repeats
        switch (now.getDayOfWeek()) {
            case MONDAY -> {beginDate = now; endDate = now.plusDays(6);}
            case TUESDAY -> {beginDate = now.minusDays(1); endDate = now.plusDays(5);}
            case WEDNESDAY -> {beginDate = now.minusDays(2); endDate = now.plusDays(4);}
            case THURSDAY -> {beginDate = now.minusDays(3); endDate = now.plusDays(3);}
            case FRIDAY -> {beginDate = now.minusDays(4); endDate = now.plusDays(2);}
            case SATURDAY -> {beginDate = now.minusDays(5); endDate = now.plusDays(1);}
            case SUNDAY -> {beginDate = now.minusDays(6); endDate = now;}
            default -> {
                return GeneralResponse.builder().status(HttpStatus.INTERNAL_SERVER_ERROR).getResponse();
            }
        }

        List<Entry> entries = entryService.findByPeriod(beginDate, endDate);

        return GeneralResponse.builder().data(entriesFilters.mapEntriesByWeek(entries)).status(HttpStatus.OK).getResponse();

    }
//    @GetMapping("/byYear")
//    public ResponseEntity<GeneralResponse> getSumByYears() {
//
//    }


}
