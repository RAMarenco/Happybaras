package org.happybaras.server.domain.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PermitRegisterDTO {
    @NotBlank
    @Pattern(regexp = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$\n")
    private String visitor;

    @NotBlank
    @Pattern(regexp = "^(unique|multiple)$\n")
    private String entranceType;

    @Pattern(regexp = "^(periodic|noPeriodic)$\n")
    private String repetitionType;

    
}
