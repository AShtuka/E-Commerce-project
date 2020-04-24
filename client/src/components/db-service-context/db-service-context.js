import React from "react";

const {
    Provider: DBServiceProvider,
    Consumer: DBServiceConsumer
} = React.createContext();

export {
    DBServiceConsumer,
    DBServiceProvider
};