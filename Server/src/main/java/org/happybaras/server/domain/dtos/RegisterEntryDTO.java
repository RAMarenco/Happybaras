package org.happybaras.server.domain.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RegisterEntryDTO {
    @NotBlank
    private String name;

    @NotBlank
    private String identityDocument;

    @NotBlank
    @Pattern(regexp = "^\\d{4}") // The residence number will have a maximum of 4 digits
    private int houseNumber;

    @NotBlank
    private String description;
}
