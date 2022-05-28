import {FC} from "react";
import '../styles/styles.scss';
import {wrapper} from "../store";
import {AppProps} from "next/app";

//iz next-redux-wrapper + standard next
const WrappedApp: FC<AppProps> = ({Component, pageProps}) => <Component {...pageProps} />;
export default wrapper.withRedux(WrappedApp);