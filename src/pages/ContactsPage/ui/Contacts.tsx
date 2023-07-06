import {useTranslation} from "react-i18next";

const Contacts = () => {
    const {t} = useTranslation();
    return (
        <div>
            {t("Контакты")}
        </div>
    );
};

export default Contacts;