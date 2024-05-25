const editModalInputs = [
    {
        text: "Nombre",
        name: "name",
        type: "text",
        class: "full",
    },
    {
        text: "Correo",
        name: "name",
        type: "text",
        class: "full",
    }
]

const editModalDropdown = [
    {
        text: "Residencia",
        list: "address-list",
        name: "address",
        class: "full",
    },
    {
        text: "Rol",
        list: "role-list",
        name: "role",
        class: "full",
    },
]

// TODO: Delete dummy data
const dummyAddresses = [
    {
        address: "Casa 1",
        value: "1",
    },
    {
        address: "Casa 2",
        value: "2",
    },
    {
        address: "Casa 3",
        value: "3",
    },
    {
        address: "Casa 11",
        value: "11"
    },
    {
        address: "Casa 12",
        value: "1",
    },
    {
        address: "Casa 13",
        value: "2",
    },
    {
        address: "Casa 14",
        value: "3",
    },
    {
        address: "Casa 21",
        value: "11"
    }
]

export { editModalInputs, editModalDropdown, dummyAddresses };