import client from "./client";
import multiPayments from "obyte-multi-payments";

export default new multiPayments(client, "Multi test", true)
