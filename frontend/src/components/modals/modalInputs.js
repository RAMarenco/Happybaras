const editModalInputs = [
    {
        text: "Nombre",
        name: "name",
        type: "text",
        class: "full",
        disabled: true
    },
    {
        text: "Correo",
        name: "name",
        type: "text",
        class: "full",
        disabled: true
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
        address: "Olivos #1",
        value: "1",
    },
    {
        address: "Olivos #2",
        value: "2",
    },
    {
        address: "Olivos #3",
        value: "3",
    },
    {
        address: "Olivos #11",
        value: "11"
    },
    {
        address: "Olivos #12",
        value: "1",
    },
    {
        address: "Olivos #13",
        value: "2",
    },
    {
        address: "Olivos #14",
        value: "3",
    },
    {
        address: "Olivos #21",
        value: "11"
    }
]

export { editModalInputs, editModalDropdown, dummyAddresses };