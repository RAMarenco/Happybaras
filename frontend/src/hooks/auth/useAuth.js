export const useAuth = () => {
    const dataStorage = () => {
        const data = JSON.parse(localStorage.getItem("dataStorage"));

        if (data && (!("token" in data) || !("user" in data))) return null;

        return data;
    };

    const isLoggedIn = () => {
        return dataStorage() != null;
    };

    const getRole = () => {
        if (isLoggedIn) {
            return dataStorage().user.role;
        }

        return null;
    };

    const verifyRole = (role) => {
        if (role !== getRole()) return false;
        return true;
    };

    return { dataStorage, isLoggedIn, getRole, verifyRole };
};
