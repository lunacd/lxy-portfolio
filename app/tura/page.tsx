import TuraClient from "./page.client";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tura | Shirley Lyu",
};

export default function Sunrise() {
    return <TuraClient />;
}
