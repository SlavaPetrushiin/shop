import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "../shared/lib/classNames/classNames";
import {AppRouter} from "./providers/router/ui/AppRouter";
import "app/styles/index.scss";

export const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <AppRouter />
        </div>
    );
};
