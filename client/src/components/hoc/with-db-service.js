import React from "react";
import {DBServiceConsumer} from "../db-service-context";

const withDBService = () => (Wrapped) => {
    return (props) => {
        return (
            <DBServiceConsumer>
                {
                    (dbService) => {
                        return (
                            <Wrapped {...props} dbService = {dbService} />
                        )
                    }
                }
            </DBServiceConsumer>
        )
    }
};

export default withDBService;