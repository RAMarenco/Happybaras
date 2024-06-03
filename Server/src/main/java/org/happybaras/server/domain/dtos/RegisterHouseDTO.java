package org.happybaras.server.domain.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RegisterHouseDTO {
    @NotBlank
    @Pattern(regexp = "[A-Z]\\w{1,15}")
    private String address;

    @NotBlank
    @Pattern(regexp = "^\\d{4}")
    private int houseNumber;

    @Pattern(regexp = "^(\\d{4}-\\d{4})$") // Format: 7839-4892
    private String telephone;

    @Pattern(regexp = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$\n")
    private String ownerEmail;
}
