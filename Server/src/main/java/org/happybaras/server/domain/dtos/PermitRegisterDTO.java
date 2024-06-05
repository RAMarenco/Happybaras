package org.happybaras.server.domain.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

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

    @NotBlank
    @Pattern(regexp = "^\\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01])$")
    private String beginDate;

    // If it is a permit of type unique then endDate will be the same as beginDate
    @NotBlank
    @Pattern(regexp = "^\\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01])$")
    private String endDate;

    @NotBlank
    @Pattern(regexp = "^([01]\\d|2[0-3]):[0-5]\\d$")
    private String beginHour;

    @NotBlank
    @Pattern(regexp = "^([01]\\d|2[0-3]):[0-5]\\d$")
    private String endHour;

    @Pattern(regexp = "^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday)(,(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday))*$")
    private String days;
}
