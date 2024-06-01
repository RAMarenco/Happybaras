package org.happybaras.server.domain.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;
import java.util.UUID;

@Data
@Entity
@Table(name = "happy_permit_status")
public class PermitStatus {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    private String status;

    @OneToMany(mappedBy = "status", fetch = FetchType.LAZY)
    @JsonIgnore
    private List<Permit> permits;
}
