import {classNames} from "shared/lib/classNames/classNames";
import React, {useState} from "react";
import {Button} from "shared/Button";
import cls from "./Sidebar.module.scss";

interface SidebarProps {
    className?: string;
}

const Sidebar: React.FC<SidebarProps> = (props) => {
    const {className = ""} = props;

    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => setCollapsed((prev) => !prev);

    return (
        <div className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <Button onClick={onToggle}>S</Button>
        </div>
    );
};

export default Sidebar;
