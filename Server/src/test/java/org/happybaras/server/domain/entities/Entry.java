package org.happybaras.server.domain.entities;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;
import java.util.UUID;

@Data
@Entity
@Table(name = "happy_entry")
public class Entry {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    private Date timestamp;
    private String comment;
    private String document;

    @ManyToOne(fetch = FetchType.LAZY)
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    private User vigilant;

    @ManyToOne(fetch = FetchType.LAZY)
    private House house;
}
