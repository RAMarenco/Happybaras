package org.happybaras.server.domain.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@NotBlank
public class UserEditionDTO {
    @NotBlank
    @Pattern(regexp = "[A-Z]\\w{1,15}\\s[#\\w\\d]\\d{1,4}")
    private String house;

    @NotBlank
    @Pattern(regexp = "\\b(visitor|resident|admin|vigilant)\\b\n")
    private String role;
}
