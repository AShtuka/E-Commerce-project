import React from "react";
import MainLayout from "../layouts/main-layout";
import './personal-cabinet.css'
import PageContainer from "../layouts/page-container";
import PersonalCabinetMenu from "../../personal-cabinet/menu";
import PersonalCabinetContent from "../../personal-cabinet/content";

const PersonalCabinet = () => {
    return (
        <MainLayout>
            <PageContainer
                menu={<PersonalCabinetMenu/>}
                content={<PersonalCabinetContent/>}
            />
        </MainLayout>
    )
};

export default PersonalCabinet;