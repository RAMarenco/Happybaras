package org.happybaras.server.domain.entities;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Date;
import java.util.UUID;

@Data
@Entity
@Table(name = "happy_permit")
public class Permit {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    private Date timestamp;
    private LocalTime beginHour;
    private LocalTime endHour;
    private LocalDate beginDate;
    private LocalDate endDate;
    private String days;

    @ManyToOne(fetch = FetchType.EAGER)
    private House house;

    @ManyToOne(fetch = FetchType.EAGER)
    private User resident;

    @ManyToOne(fetch = FetchType.EAGER)
    private User visitor;

    @ManyToOne(fetch = FetchType.EAGER)
    private PermitType type;

    @ManyToOne(fetch = FetchType.EAGER)
    private PermitStatus status;
}
