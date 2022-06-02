import {FC} from "react";
import '../styles/styles.scss';
import {AppProps} from "next/app";
import {wrapper} from "../store";

//iz next-redux-wrapper + standard next
const WrappedApp: FC<AppProps> = ({Component, pageProps}) => (
    <Component {...pageProps} />
);

export default wrapper.withRedux(WrappedApp);