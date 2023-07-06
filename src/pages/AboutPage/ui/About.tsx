import {useTranslation} from "react-i18next";

const About = () => {
    const {t} = useTranslation();
    return <div>{t("О нас")}</div>;
};

export default About;
